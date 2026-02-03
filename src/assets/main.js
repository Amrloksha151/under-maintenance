import './bootstrap.min.css';
import './nav.css';
import $ from 'jquery';
import { ImageAnimator } from './modules/animate.js'
import Alert from "./modules/alerts.js"

function main() {
    const animator = new ImageAnimator("#lineman");
    animator.breathe("41vh", "auto");
    const joinAlert = new Alert(
        "📢We are hiring!!📢",
        "We are preparing for the upcoming year and looking forward to escalate our infrastructure and add more features and capabilities.\nIf you want to become a part of the next season team, navigate to /dev/join.",
        "info",
        "warning",
        "main"
    );
    // joinAlert.messageAlert();
}

$(main())