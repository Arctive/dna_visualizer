import drawDropdown from './dropdown';
import {displaySeq} from './display_seq';
import { openModal } from './tutorial_modals/intro_modal';

document.addEventListener("DOMContentLoaded", () => {
    openModal();
    document.getElementById("tutorial").addEventListener("click", openModal);
    document.getElementById("tutorial-mobile").addEventListener("click", openModal);
    document.getElementById("content").style.display = "flex";
    drawDropdown();
    displaySeq();
})
