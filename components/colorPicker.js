import { getPickedColor, setPickedColor } from "../states.js";
import { COLORS_LENGTH, getColorByIndex } from "../tables/grid/config.js";


export const currentColorElement = document.querySelector('#current-color');

const colorPickerSection = document.querySelector('.color-picker');
const colorPickers = Array.from({ length: COLORS_LENGTH }, (_, i) => {

    const colorPicker = document.createElement("div");

    colorPicker.addEventListener('mouseover', () => {
        colorPicker.style.cursor = 'crosshair'; 
    });
      
    colorPicker.addEventListener('mouseout', () => {
        colorPicker.style.cursor = 'auto'; 
    });

    colorPicker.addEventListener('click', () => {

        const computedStyle = window.getComputedStyle(colorPicker);
        setPickedColor(computedStyle.backgroundColor);
        
        currentColorElement.style.background = getPickedColor();
    });

    colorPicker.style.background = getColorByIndex(i);

    colorPickerSection.appendChild(colorPicker);
})
