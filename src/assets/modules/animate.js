import $ from 'jquery';

class ImageAnimator {
    constructor(selector) {
        this.element = $(selector);
    }

    get width() {
        return this.element.css("width")
    }

    get height() {
        return this.element.css("height")
    }

    breathe(targetWidth, targetHeight) {
        const originalWidth = this.width;
        const originalHeight = this.height;

        this.element.animate({
            width: targetWidth,
            height: targetHeight
        },
        "slow",
        "swing",
        () => {
            this.breathe(originalWidth, originalHeight)
        }
    );
    }
}

export {ImageAnimator};