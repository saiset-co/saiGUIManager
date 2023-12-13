// Функція getAllNestedKeysAndValues приймає об'єкт та повертає масив об'єктів з усіма вкладеними парами ключ-значення
function getAllNestedKeysAndValues(obj, currentPath = "") {
    // Створюємо порожній масив для зберігання пар ключ-значення
    const result = [];

    try {

        // Ітеруємося через всі ключі об'єкта
        for (const key in obj) {
            // Перевіряємо, чи об'єкт має вказаний ключ
            if (obj.hasOwnProperty(key)) {
                // Зберігаємо значення, яке відповідає поточному ключу
                const value = obj[key];
                // Формуємо новий шлях для вкладеного ключа, додаючи поточний шлях і крапку, якщо поточний шлях не порожній
                const newPath = currentPath ? `${currentPath}.${key}` : key;

                // Перевіряємо, чи ключ є `items` і значення є масивом або __gohashid, щоб скіпнути
                if (key === 'items' && Array.isArray(value) || key === "__gohashid") {
                    // Якщо так, пропускаємо
                    continue;
                }

                // Перевіряємо, чи значення є геттером
                if (typeof value === "object" && value !== null && typeof value.get === "function") {
                    // Якщо значення є геттером, викликаємо геттер
                    result.push({key: newPath, value: value.get()});
                } else if (typeof value === "object" && value !== null) {
                    // Якщо значення є об'єктом (вкладеним об'єктом або масивом)
                    // Рекурсивно викликаємо функцію для вкладеного об'єкта та додаємо отримані ключ-значення до result
                    result.push(...getAllNestedKeysAndValues(value, newPath));
                } else {
                    // Якщо значення не є об'єктом, ми опинились на останньому рівні вкладеності, додаємо ключ-значення до result
                    result.push({key: newPath, value: value});
                }
            }
        }

        // Масив з парою ключ-вкладеності та значення
        return result;
    } catch (error) {
        console.error(error)
    }
}

// const objectData = {
//     nameService: "ServiceName",
//     common: {
//         storage: {
//             url: "storage_url",
//             token: "storage_token"
//         },
//         sms: {
//             url: "sms_url",
//             master_key: "sms_master_key"
//         },
//         email: {
//             url: "email_url",
//             sender: "email_sender"
//         }
//     },
//     items: [
//         { label: "socket enabled: true" },
//         { label: "socket port: 8080" },
//         { label: "http enabled: true" },
//         { label: "http port: 80" },
//         { label: "ws enabled: true" },
//         { label: "ws port: 8081" },
//     ]
// };
//
// const nestedKeysAndValues = getAllNestedKeysAndValues(objectData);
//
// console.log(nestedKeysAndValues);
