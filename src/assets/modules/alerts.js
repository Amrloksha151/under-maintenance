import $ from 'jquery';
import logo from '../images/logo.png';
import { intervalToDuration } from 'date-fns';

class Alert {
    constructor(title, message, text_color, bg_color, parent) {
        this.title = title;
        this.message = message;
        this._color = [text_color, bg_color];
        this.parent = parent;
        //this.alerts = [];
    }

    get color() {
        return [`text-${this._color[0]}`, `bg-${this._color[1]}`];
    }

    set color(color) {
        if (typeof color !== "object") {
            throw Error("Color must be an array.")
        }
        this._color = color;
    }

    toastAlert() {
        const toastID = crypto.randomUUID()
        let toastElement = $(`
        <div class="toast fade show" id="${toastID}" role="alert" aria-live="assertive" aria-atomic="true"
            style="min-width: 300px; background: #23272b; color: #f8f9fa; border: 1px solid #343a40; top: 30px;">
            <div class="toast-header" style="background: #343a40; color: #f8f9fa;">
            <img src="${logo}" class="rounded me-2" alt="Gharbiya STEM" width="40px" height="40px">
            <strong class="me-auto">${this.title}</strong>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body ${this.color[0]} ${this.color[1]}">
            ${this.message}
            </div>
        </div>
        `);
        $(this.parent).append(toastElement);
        $(`#${toastID} .btn-close`).on('click', function() {
            $(`#${toastID}`).remove();
        });
    }

    alertBox() {
        
    }

    popupAlert() {
        
    }
}

export default Alert;