function connectNodes(commonFields, nodeFrom, myDiagram) {
    let linkDataArray = myDiagram.model.linkDataArray.slice(); // Копія масиву зв'язків

    // Знаходимо і видаляэмо всі зв'язки, пов'язані з поточним вузлом
    linkDataArray = linkDataArray.filter(link => {
        return link.from !== nodeFrom.key && link.to !== nodeFrom.key;
    });

    // Додаємо нові зв'язки для commonFields
    commonFields.forEach(object => {
        for (const key in object.sharedFields) {
            const linkObject = {
                from: nodeFrom.key,
                to: object.key,
                text: object.sharedFields[key][1],
                toText: object.sharedFields[key][0]
            };

            // Додаємо новий зв'язок до масиву
            linkDataArray.push(linkObject);
        }
    });

    myDiagram.model.linkDataArray = linkDataArray;  // Оновлення моделі
    myDiagram.requestUpdate(); // Оновлюємо графічне відображення
}
