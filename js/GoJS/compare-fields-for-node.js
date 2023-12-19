// Ф-ція для порівняння полів вузла з іншими вузлами
function compareFieldsForNode(nodeDataObject) {
    // Отримуємо об'єкти з {ключем та полями} з якими вузлами є спільне
    const commonFields = checkFieldsEquality(nodeDataObject);

    // commonFields містить об'єкти з ключами вузлів та спільними полями
    if (commonFields.length > 0) {
        // console.log("Спільні поля:", commonFields);
    }
    return commonFields
}

// Функція для перевірки схожості полів об'єкта в інших вузлах
function checkFieldsEquality(nodeDataObject) {
    const myDiagram = getDiagramInstance(); // Отримуємо нашу діаграму
    const nodes = myDiagram.nodes; // Отримуємо всі вузли
    const commonFields = []; // Майбутній масив зі спільними ключами

    // Перебираємо всі вузли
    nodes.each(node => {
        // Не порівнюємо вузол, який вибрали, самим з собою
        if (node.data.key !== nodeDataObject.key) {
            // Перевірка, чи мають вони спільні дані
            const sharedFields = findCommonValues(node.data, nodeDataObject);

            // Якщо у вузлі існують спільні дані, додаємо їх до масиву
            if (Object.keys(sharedFields).length !== 0) {
                commonFields.push({
                    key: node.data.key,
                    sharedFields: sharedFields
                });
            }
        }
    });

    return commonFields;
}


// Функція для знаходження спільних значень між двома об'єктами
function findCommonValues(nodeData1, nodeData2) {
    // Об'єкт для збереження результатів
    const result = {};

    // Фільтрації ключів
    const filterWords = ['port', 'url', 'host', 'Port', 'Url', 'Host'];

    // Функція, яка визначає, чи слід додавати ключ до результату
    function shouldAddKey(key) {
        // Перетворення ключа в нижній регістр для порівняння
        const lowercaseKey = key.toLowerCase();
        // Дивимося, чи ключ містить хоча б одне з filterWords
        return filterWords.some(word => lowercaseKey.includes(word));
    }

    // Рекурсивна функція для ітерації по всіх ключах та значеннях об'єкта
    function iterateNestedObject(currentObj, parentKey = '') {
        for (const key in currentObj) {
            // Формуємо ключ додаючи спереду попередній(батьківський)
            const currentKey = parentKey ? `${parentKey}.${key}` : key;
            // Отримання значення за поточним ключем
            const value = currentObj[key];

            // Якщо значення є об'єктом, викликаємо функцію рекурсивно
            if (typeof value === 'object' && value !== null) {
                iterateNestedObject(value, currentKey);
            } else {
                // Якщо значення не є об'єктом
                // Перевірка, чи слід додавати ключ до результату
                if (result[value] && shouldAddKey(currentKey)) {
                    result[value].push(currentKey);
                } else if (!result[value] && shouldAddKey(currentKey)) {
                    result[value] = [currentKey];
                }
            }
        }
    }

    // Виклик функції для обох об'єктів
    iterateNestedObject(nodeData1);
    iterateNestedObject(nodeData2);

    // Відфільтруємо результат так, щоб включити лише ті значення, які є спільними для обох об'єктів
    const commonValues = {};
    for (const value in result) {
        if (result[value].length > 1) {
            const keys = result[value];
            commonValues[value] = keys;
        }
    }

    return commonValues;
}