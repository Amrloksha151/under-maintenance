import './bootstrap.min.css';
import './nav.css';
import $ from 'jquery';
import Alert from "./modules/alerts.js"

function main() {
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