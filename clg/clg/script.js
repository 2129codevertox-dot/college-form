
function sendToWhatsApp(event) {

    event.preventDefault();

    let form = event.target;

    let data = new FormData(form);

    let message = "COLLEGE ADMISSION FORM\n\n";

    for (let [key, value] of data.entries()) {

        if (value.trim() !== "") {

            message += key.toUpperCase() + ": " + value + "\n";

        }

    }

    let phone = "919592620529";

    let whatsappURL =
        "https://wa.me/" + phone +
        "?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

}