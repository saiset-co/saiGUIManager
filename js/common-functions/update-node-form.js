// Ф-ція для оновлення конфігу
function updateForm(KeysAndValuesArray) {
    const form = document.getElementById("nodeInfoForm");

    // Очищаємо стару форму
    form.innerHTML = '';

    // Перебираємо наш об'єкт
    KeysAndValuesArray.forEach(obj => {
        const label = document.createElement("label"); // Елемент label

        label.textContent = obj.key; // Текст(ключ) label як значення з config
        label.classList.add("label");
        form.appendChild(label); // Додаємо у форму

        const input = document.createElement("input"); // Елемент input

        input.type = "text"; // Атрибут type = text
        input.value = obj.value; // Значення з об'єкту те що було у вкладеному config
        input.placeholder = obj.key; // placeholder
        input.classList.add("input");
        form.appendChild(input); // Додаємо у форму
    });
}