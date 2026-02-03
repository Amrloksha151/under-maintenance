import * as bootstrap from 'bootstrap';
import $ from 'jquery';

class Alert {
    constructor(title, message, text_color, bg_color, parent) {
        this.title = title;
        this.message = message;
        this._color = [text_color, bg_color];
        this.parent = parent;
    }

    get color() {
        return [`text-${this._color[0]}`, `bg-${this._color[1]}`];
    }

    set color(color) {
        this._color = color;
    }

    messageAlert() {
        
    }

    alertBox() {
        
    }

    popupAlert() {
        
    }
}

export default Alert;