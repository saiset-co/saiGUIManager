function errResponse(error) {
    console.log(error);
    switch (true) {
        case(error === "Response is empty"):
            showAlert("Response is empty");
            break;
        default:
            showAlert(error);
            break;
    }
}

function showAlert(message, details = '') {
    alert(message + '\n' + details);
}

