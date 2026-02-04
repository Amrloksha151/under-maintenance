import $ from 'jquery';
import lineman from '../images/lineman2.png';
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
        const toastElement = $(`
        <div class="toast fade show" id="${toastID}" role="alert" aria-live="assertive" aria-atomic="true"
            style="min-width: 300px; background: #23272b; color: #f8f9fa; border: 1px solid #343a40; top: 30px;">
            <div class="toast-header" style="background: #343a40; color: #f8f9fa;">
            <img src="${lineman}" class="rounded me-2" alt="Gharbiya STEM" width="40px" height="40px">
            <strong class="me-auto">${this.title}</strong>
            <small class="text-body-secondary">${intervalToDuration({start: new Date("2026-02-03"), end: Date.now()}).days} days ago</small>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
            ${this.message}
            </div>
        </div>
        `);
        $(this.parent).append(toastElement);
        $(`#${toastID} .btn-close`).on('click', function() {
            $(`#${toastID}`).remove();
        });
    }

    popupAlert() {
        const modalID = crypto.randomUUID();
        const modalElement = $(`
        <div class="modal fade show" id="${modalID}" tabindex="-1" style="display: block;">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content ${this.color.join(" ")}">
            <div class="modal-header">
                <h5 class="modal-title">${this.title}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                ${this.message}
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>
        `);
        $(this.parent).append(modalElement);
        $(`#${modalID} .btn-close, #${modalID} .btn-secondary`).on('click', function() {
            $(`#${modalID}`).remove();
        });
    }
    
}

export default Alert;