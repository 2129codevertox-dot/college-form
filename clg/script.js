
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

    let phone = "919877369565";

    let whatsappURL =
        "https://wa.me/" + phone +
        "?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

}