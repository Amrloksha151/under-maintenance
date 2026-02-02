import './bootstrap.min.css';
import './nav.css';
import $ from 'jquery';
import { ImageAnimator } from './modules/animate.js'

function main() {
    const animator = new ImageAnimator("#lineman");
    animator.breathe("41vh", "auto");
}

$(main())