// Ф-ція для запиту
async function ajaxRequest(requestData) {
    const {url, type, data, headers} = requestData;

    try {
        const response = await $.ajax({
            type: type,
            url: url,
            headers: headers,
            data: JSON.stringify(data),
            contentType: "application/json",
            dataType: "json",
        });

        return response;
    } catch (error) {
        console.error('Error fetching repositories:', error);
    }
}