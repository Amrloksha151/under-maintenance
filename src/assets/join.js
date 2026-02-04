import './bootstrap.min.css';
import './nav.css';
import $ from 'jquery';
import Alert from "./modules/alerts.js"

function main() {
    if (new URLSearchParams(window.location.search).get("submitted") === "true") {
        const submittedAlert = new Alert(
            "Form Submitted Successfully!✅",
            "Thank you for contacting us! We will get back to you soon.",
            "success",
            "dark",
            "body"
        );
        submittedAlert.popupAlert();
    }

    const formAlert = new Alert(
        "Beware!",
        "Make sure all your information is correct before submitting the form. Once you submit you should receive a thank you email message <strong>other wise we've not received your submission.</strong>",
        "warning",
        "dark",
        ".toast-container"
    )
    formAlert.toastAlert();
    $("#lineman").hide();
    $("#lineman").fadeIn(2000);
}

$(main())