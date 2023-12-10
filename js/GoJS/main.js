function init() {
    const $ = go.GraphObject.make;

    const myDiagram =
        new go.Diagram("myDiagramDiv", {
            allowDelete: true,
            allowCopy: true,
            // Визначає максимальну кількість вибраних елементів на діаграмі. У цьому випадку користувач може вибрати лише один елемент.
            maxSelectionCount: 1, // users can select only one part at a time
            "undoManager.isEnabled": true
        });

    const itemTempl =
        $(go.Panel, "Vertical",
            {
                row: 1
            },
            $(go.TextBlock, {
                font: "14px sans-serif",
                margin: new go.Margin(0, 5, 5, 5),
                editable: true // Додаємо editable для дозволу редагування тексту
            }, new go.Binding("text", "data").makeTwoWay()) // Прив'язали текст пункту до значення до поля в масиві даних
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

    if (window.Inspector) {
        // Створення екземпляра Inspector та прив'язка до myDiagram
        myInspector = new Inspector("myInspector", myDiagram, {
            properties: {
                nameService: { readOnly: true },
                items: { show:false },
            }
        });
    }

}

// Ф-ція для додавання нового вузла до нашої діаграми
function addNode(configs) {

    const myDiagram = getDiagramInstance(); // Отримати екземпляр діаграми
    const model = myDiagram.model; // Отримати model діаграми

    // Отримати останній ключ у масиві nodeDataArray
    const lastKey = model.nodeDataArray.length > 0 ? model.nodeDataArray[model.nodeDataArray.length - 1].key : 0;

    // Створити новий елемент для додавання
    let newNode = configs;
    newNode.key = lastKey + 1;

    // Додати новий елемент у масив
    model.addNodeData(newNode);
    console.log(nodeDataArray);
}

// Ф-ція для отримання нашої діаграми з DOM
function getDiagramInstance() {
    // Отримати екземпляр діаграми
    return go.Diagram.fromDiv(document.getElementById("myDiagramDiv"));
}

window.addEventListener('DOMContentLoaded', init);

let nodeDataArray = [];
