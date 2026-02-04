import './bootstrap.min.css';
import './nav.css';
import Alert from "./modules/alerts.js";
import $ from 'jquery';

function main() {
    const devAlert = new Alert(
        "Welcome to the Development Team Page!🥳",
        "This page showcases the members of our website development team. We are proud that we had the honor to handle such a mission. Stay tuned for updates and new features as we continue to enhance our site.",
        "info",
        "dark",
        ".toast-container"
    );
    devAlert.toastAlert();
}

$(main())