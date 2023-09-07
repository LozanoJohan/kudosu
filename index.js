import { getPickedColor } from "./states.js";
import { setColor } from "./utils/color.js";
import { currentColorElement } from "./components/colorPicker.js";
import { verifyCol, verifyGrid, verifyPad, verifyRow } from "./tables/grid/logic.js";
import { fillSomeSpots, resetBoard } from "./utils/fill.js";



document.addEventListener("DOMContentLoaded", () => {

    currentColorElement.style.background = getPickedColor()
    fillSomeSpots()

    document.querySelector('button').addEventListener('click', () => {
        resetBoard()
        fillSomeSpots()
    })
    const squareElements = document.querySelectorAll('.square')

    squareElements.forEach((squareElement) => {

        squareElement.addEventListener("click", () => {

            const index = squareElement.getAttribute('id')
            setColor(squareElement, getPickedColor(), index)

            console.log(verifyCol(index))
            console.log(verifyPad(index))
            console.log(verifyRow(index))

            if (verifyGrid()){
                const winMessage = document.querySelector('#win-p')
                winMessage.style.display = 'block'  
            }
        });
    })
});
