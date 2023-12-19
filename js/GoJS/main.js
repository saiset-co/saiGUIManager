function init() {
    const $ = go.GraphObject.make;

    myDiagram =
        new go.Diagram("myDiagramDiv", {
            allowDelete: true,
            allowCopy: true,
            // Визначає максимальну кількість вибраних елементів на діаграмі. У цьому випадку користувач може вибрати лише один елемент.
            maxSelectionCount: 1, // users can select only one part at a time
            "undoManager.isEnabled": true
        });

    const itemTempl =
        $(go.Panel, "Horizontal",
            {
                row: 1
            },
            $(go.TextBlock, {
                row: 1,
                font: "14px sans-serif",
                margin: new go.Margin(0, 5, 5, 5),
                // editable: true // Додаємо editable для дозволу редагування тексту
            }, new go.Binding("text", "label")), // Прив'язали текст пункту до значення до поля в масиві даних
            $(go.TextBlock, {
                row: 2,
                font: "14px sans-serif",
                margin: new go.Margin(0, 5, 5, 5),
                // editable: true // Додаємо editable для дозволу редагування тексту
            }, new go.Binding("text", "data")) // Прив'язали текст пункту до значення до поля в масиві даних
        );


    myDiagram.nodeTemplate =
        $(go.Node, "Auto",
            {
                selectionAdorned: true, // Дозволяє відображати обрані області вузла.
                resizable: true, // Дозволяє користувачеві змінювати розмір вузла.
                // Додає тінь до вузла з вказаними параметрами. ↓ 3 рядки
                isShadowed: true,
                shadowOffset: new go.Point(4, 4),
                shadowColor: "#919cab"
            },
            $(go.Shape, "RoundedRectangle", {fill: "#3DA35D", stroke: "#E26D5C", strokeWidth: 4}),
            $(go.Panel, "Table", // Створює панель таблиці, яка містить внутрішні елементи вузла.
                {
                    margin: 8,
                    stretch: go.GraphObject.Fill,
                    // width: 160
                },
                $(go.RowColumnDefinition, {row: 0, sizing: go.RowColumnDefinition.None}), // Визначає стовпці та рядки для панелі таблиці.

                // the table header
                // Заголовок нашого вузла
                $(go.TextBlock,
                    {
                        row: 0, alignment: go.Spot.Center,
                        margin: new go.Margin(0, 24, 0, 2),  // leave room for Button
                        font: "bold 16px sans-serif",
                        editable: true // Додаємо editable для дозволу редагування тексту
                    },
                    new go.Binding("text", "nameService").makeTwoWay(), // Зв'язує властивість "text" текстового блоку з відповідною властивістю "key" в даних моделі.
                ),
                $(go.Panel, "Vertical",
                    {
                        name: "NonInherited", //  Налаштовує ім'я панелі.
                        alignment: go.Spot.TopLeft,
                        defaultAlignment: go.Spot.Left,
                        itemTemplate: itemTempl, // Наш шаблон для кожного атрибуту, той що зверху
                        row: 1
                    },
                    new go.Binding("itemArray", "items")), // Зв'язує масив атрибутів з моделі.
            ),
        );

    myDiagram.linkTemplate =
        $(go.Link,  // Створюємо шаблон для ліній
            {
                selectionAdorned: true,  // Виділення лінії при виборі
                layerName: "Front",  // Визначає шар для розташування лінії
                reshapable: true,  // Можливість зміни форми лінії
                curve: go.Link.JumpOver,  // Стиль кривизни лінії
                isShadowed: true,  // Застосування тіні до лінії
                shadowOffset: new go.Point(2, 2),  // Зміщення тіні
                shadowColor: "#919cab",  // Колір тіні
                routing: go.Link.Orthogonal,  // Ортогональний стиль маршрутизації
                corner: 10  // Радіус закруглення лінії
            },
            $(go.Shape,  // Форма лінії
                {stroke: "#f7f9fc", strokeWidth: 4}),  // Колір та товщина обводки лінії
            $(go.Panel, "Position",  // Панель, яка регулює позицію внутрішніх елементів лінії
                $(go.Panel, "Auto", {segmentIndex: 0, segmentOffset: new go.Point(22, 0)},  // Внутрішня панель для тексту "from"
                    $(go.Shape, "RoundedRectangle", {fill: "#f7f9fc"}, {stroke: "#eeeeee"}),  // Форма та стиль для внутрішньої панелі
                    $(go.TextBlock,  // Текстовий блок для "from" label
                        {
                            textAlign: "center",
                            font: "bold 14px sans-serif",
                            stroke: "black",
                            background: "#f7f9fc",
                            segmentOffset: new go.Point(NaN, NaN),
                            segmentOrientation: go.Link.OrientUpright
                        },
                        new go.Binding("text", "text"))
                ),
                // Додатковий код для внутрішньої панелі "to"
                // $(go.Panel, "Auto",
                //     {
                //         segmentIndex: -1,
                //         segmentOffset: new go.Point(-13, 0)
                //     },
                //     $(go.Shape, "RoundedRectangle", { fill: "#edf6fc" }, { stroke: "#eeeeee" }),
                //     $(go.TextBlock,
                //         {
                //             textAlign: "center",
                //             font: "bold 14px sans-serif",
                //             stroke: "black",
                //             segmentIndex: -1,
                //             segmentOffset: new go.Point(NaN, NaN),
                //             segmentOrientation: go.Link.OrientUpright
                //         },
                //         new go.Binding("text", "toText"))
                // )
            )
        );


    myDiagram.model = new go.GraphLinksModel({
        nodeDataArray: nodeDataArray,
        linkDataArray: linkDataArray
    });

    // Додаємо обробник вибору елемента для оновлення вмісту форми
    myDiagram.addDiagramListener("ChangedSelection", function (e) {
        const node = myDiagram.selection.first();
        if (node) {
            // Отримуємо всі пари ключа(вкладеність) та значення
            const KeysAndValuesArray = getAllNestedKeysAndValues(node.data);
            updateForm(KeysAndValuesArray);  // Оновлення форми при виборі вузла
        }
    });

}

function updateClick() {
    // Отримуємо всі label та input елементи
    const labelKeys = $(".label");
    const fieldValue = $(".input");

    // Майбутній масив з парами вкладений ключ та його значення
    let keyAndValueArr = [];

    // Перебираємо та записуємо поля з нашої форми
    labelKeys.each(function (index, element) {
        const key = $(element).text();
        const value = $(fieldValue[index]).val();

        const object = {
            key: key,
            value: value
        }

        keyAndValueArr.push(object);
    });

    // Отримуємо дані з діаграми в acc через початкову модель діаграми
    const reconstructedObject = keyAndValueArr.reduce((acc, item) => {
        const keys = item.key.split('.'); // Розділення ключа по "." створення масиву ключів.
        let currentObj = acc; // Ініціалізація currentObj з початковим acc

        keys.forEach((key, index) => {
            // Якщо ключ з масиву є останнім, то даємо йому значення
            if (index === keys.length - 1) {
                currentObj[key] = item.value;
            } else {
                // Якщо ні, то переходимо на наступний рівень вкладеності об'єкта
                currentObj[key] = currentObj[key] || {};
                currentObj = currentObj[key];
            }
        });
        return acc;
    }, {});

    // Отримуємо перший вибраний вузол, хоча ми більше 1-го не можемо вибрати
    const node = myDiagram.selection.first();
    if (node) {
        myDiagram.model.commit(m => {
            // Оновлюємо кожне властивість вузла окремо
            for (const key in reconstructedObject) {
                if (reconstructedObject.hasOwnProperty(key)) {
                    m.setDataProperty(node.data, key, reconstructedObject[key]);
                }
            }
        }, "changed node data");


    }

    // Дивимося після зміни які в нас є спільні поля з іншими вузлами
    const commonFields = compareFieldsForNode(node.data);

    // Перебудовуємо зв'язки вузлів
    connectNodes(commonFields, node.data, myDiagram)

    // console.log(node.data);
    myDiagram.requestUpdate(); // Оновлюємо графічне відображення
}

// Обробник при кліці на Update config
$(document).ready(function () {
    $(".buttonEdit").on('click', function (event) {
        event.preventDefault();
        updateClick();
    });
});

let nodeDataArray = [];
let myDiagram;
let linkDataArray = []

window.addEventListener('DOMContentLoaded', init);



