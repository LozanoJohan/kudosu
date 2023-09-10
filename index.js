import { getPickedColor } from "./states.js";
import { setColor } from "./utils/color.js";
import { currentColorElement } from "./components/colorPicker.js";
import { verifyCol, verifyGrid, verifyPad, verifyRow } from "./tables/grid/verify.js";
import { fillSomeSpots, resetBoard } from "./utils/fill.js";
import { solve } from "./solver/index.js";



document.addEventListener("DOMContentLoaded", () => {
    let intervalId;
    let winMessage = document.querySelector('#win-p')

    currentColorElement.style.background = getPickedColor()
    fillSomeSpots()

    document.querySelector('#reset').addEventListener('click', () => {
        resetBoard()
        fillSomeSpots()
        
        resetButtons()
    })

    const solveButton = document.querySelector('#solve')
    const stopButton = document.querySelector('#stop')
        
    solveButton.addEventListener('click', () => {

        intervalId = solve()
        
        solveButton.style.display = 'none'
        stopButton.style.display = 'inline-block'
    })

    stopButton.addEventListener('click', () => {

        resetButtons()
    })

    const squareElements = document.querySelectorAll('.square')

    squareElements.forEach((squareElement) => {

        squareElement.addEventListener("click", () => {

            const index = squareElement.getAttribute('id')
            setColor(squareElement, getPickedColor(), index)

            verifyCol(index)
            verifyPad(index)
            verifyRow(index)

            if (verifyGrid()){
                winMessage.style.display = 'block'  
            } else {
                winMessage.style.display = 'none'  
            }
        });
    })

    const resetButtons = () => {

        clearInterval(intervalId)
    
        stopButton.style.display = 'none'
        solveButton.style.display = 'inline-block'
        winMessage.style.display = 'none'  

    }
});

