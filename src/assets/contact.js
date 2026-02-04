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
            ".toast-container"
        );
        submittedAlert.popupAlert();
    }
}

$(main())