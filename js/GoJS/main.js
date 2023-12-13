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


    myDiagram.model = new go.GraphLinksModel({nodeDataArray: nodeDataArray});

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

// Обробник при кліці на Update config
$(document).ready(function () {
    $(".buttonEdit").on('click', function (event) {
        event.preventDefault();

        // Отримуємо всі label та input елементи
        const labelKeys = $(".label");
        const fieldValue = $(".input");
        let keyAndValueArr = [];

        // Перебираємо та записуємо не пусті поля з нашої форми
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
                } else { // Якщо ні, то переходимо на наступний рівень вкладеності об'єкта
                    currentObj[key] = currentObj[key] || {};
                    currentObj = currentObj[key];
                }
            });
            return acc;
        }, {});

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

            // Оновлюємо графіку
            myDiagram.requestUpdate();
        }

        console.log(node.data);
    });
});

let nodeDataArray = [];
let myDiagram;

window.addEventListener('DOMContentLoaded', init);



