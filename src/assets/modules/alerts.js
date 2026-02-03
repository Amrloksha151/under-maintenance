import * as bootstrap from 'bootstrap';
import $ from 'jquery';

class Alert {
    constructor(title, message, color) {
        this.title = title;
        this.message = message;
        this._color = color;
    }

    get color() {
        return [`text-${this._color}`, `bg-${this._color}`];
    }

    set color(color) {
        this._color = color;
    }
}

export default Alert;