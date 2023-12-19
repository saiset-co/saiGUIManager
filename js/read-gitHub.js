$(document).ready(async function () {
    // Ф-ція для отримання всіх репозиторіїв
    async function getGitHubRepositories() {

        try {
            const username = 'saiset-co';
            const apiUrl = `https://api.github.com/users/${username}/repos`;

            const requestData = {
                url: apiUrl,
                type: "GET",
                data: {},
                headers: headers
            };

            repositories = await ajaxRequest(requestData);

            displayRepositories(repositories);
        } catch (error) {
            console.error('Error fetching repositories:', error);
        }
    }

    // Ф-ція для вставки назв репозиторіїв отриманих з посилання та відмалювання їх у меню
    function displayRepositories(repositories) {
        const menuList = $("#menu ul");

        repositories.forEach(repository => {
            // Додаємо <li> у меню
            const listItem = $('<li>').text(repository.name);
            menuList.append(listItem);
        });

    }

    // Ф-ція для вирізання "-" бо в об'єкті configsURL не можна "-" в ключі
    function transformString(inputString) {
        // Розділяємо рядок по '-'
        const words = inputString.split('-');

        // Змінити першу літеру великою після дефіса
        for (let i = 1; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }

        // З'єднуємо частини, щоб був ключ для об'єкта
        const transformedString = words.join('');

        return transformedString;
    }

    // Ф-ція для отримання config з нашого репозиторію
    async function getConfigFromGitHub(microservice) {

        try {
            const apiUrl = configsURL[microservice].microservice;
            // const apiUrl = configsURL.saiAuth.docker;

            if (apiUrl === '') {
                const error = `Microservice "${microservice}" doesn't have link for config file.`;
                errResponse(error);
            } else {
                const requestData = {
                    url: apiUrl,
                    type: "GET",
                    data: {},
                    headers: headers
                };

                const fileContent = await ajaxRequest(requestData);

                // fileContent.content містить закодований у base64 вміст
                const decodedContent = atob(fileContent.content);

                if (apiUrl.includes('config.json')) {
                    // Перетворюємо JSON в об'єкт
                    const parsedData = JSON.parse(decodedContent);
                    parsedData.nameService = microservice;
                    console.log(parsedData);

                    ////////////////////////////////////////////////////////
                    const objectToDisplay = parsedData;
                    const modalDiv = document.querySelector('.modal');

                    const jsonString = JSON.stringify(objectToDisplay, null, 2);

                    const htmlCode = `<pre>${jsonString}</pre>`;

                    modalDiv.innerHTML = htmlCode;
                    ////////////////////////////////////////////////////////
                    return parsedData;
                } else if (
                    apiUrl.includes('config.yml') ||
                    apiUrl.includes('config.yaml') ||
                    apiUrl.includes('docker-compose.yml')
                ) {
                    // Перетворюємо YAML в об'єкт
                    const parsedData = jsyaml.load(decodedContent);
                    console.log(parsedData);
                    parsedData.nameService = microservice;
                    ////////////////////////////////////////////////////////
                    const objectToDisplay = parsedData;
                    const modalDiv = document.querySelector('.modal');

                    const jsonString = JSON.stringify(objectToDisplay, null, 2);

                    const htmlCode = `<pre>${jsonString}</pre>`;

                    modalDiv.innerHTML = htmlCode;
                    ////////////////////////////////////////////////////////
                    return parsedData;
                }
            }
            return {nameService: microservice};

        } catch (error) {
            console.error('Error fetching file content:', error);
        }
    }

    // Global value
    const accessToken = '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';
    const headers = {
        Authorization: `Bearer ${accessToken}`,
    };
    let repositories = [];

    // Виклик основної функції
    await getGitHubRepositories();

    // event on click on li-menu
    $('#menu .menu-list li').on('click', async function () {
        // Вирізаємо наші "-"
        const clickedMicroservice = transformString($(this).text());

        if (clickedMicroservice !== 'saiServices' && clickedMicroservice !== 'saiBft') {
            const configs = await getConfigFromGitHub(clickedMicroservice);

            // Шаблонізуємо наші дані для вузла
            const nodeItemData = formationObjectConfig(configs);
            console.log(nodeItemData)

            // Додаємо вузла при клацанні на microservice
            addNode(nodeItemData);
        }
    });

});
