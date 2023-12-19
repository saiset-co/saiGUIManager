// Ф-ція для отримання нашої діаграми з DOM
function getDiagramInstance() {
    // Отримати екземпляр діаграми
    return go.Diagram.fromDiv(document.getElementById("myDiagramDiv"));
}

// Основна ф-ція для додавання нового вузла до нашої діаграми
function addNode(configs) {

    const myDiagram = getDiagramInstance(); // Отримати екземпляр діаграми
    const model = myDiagram.model; // Отримати model діаграми

    // Отримати останній ключ у масиві nodeDataArray
    const lastKey = model.nodeDataArray.length > 0 ? model.nodeDataArray[model.nodeDataArray.length - 1].key : 0;

    // Створити новий елемент для додавання
    let newNodeDataObject = configs;
    newNodeDataObject.key = lastKey + 1;

    // Додати новий елемент у масив
    model.addNodeData(newNodeDataObject);

    // Викликати функцію порівняння полів
    const commonFields = compareFieldsForNode(newNodeDataObject);

    // console.log(commonFields)
    if (commonFields.length > 0) {
        // Створюємо зв'язки для наших вузлів
        connectNodes(commonFields, newNodeDataObject, myDiagram)

        // Оновити графічне відображення
        myDiagram.requestUpdate();

        // console.log(linkDataArray);
    }
}

