import { getPickedColor } from "./states.js";
import { currentColorElement, drawColorPicker } from "./components/colorPicker.js";
import { fillSomeSpots, resetBoard } from "./utils/fill.js";
import { onTimeOut, solve } from "./solver/index.js";
import { SOLVE_TIMEOUT } from "./config/config.js";
import { drawBoard } from "./components/board.js";



document.addEventListener("DOMContentLoaded", () => {

    drawBoard()
    drawColorPicker()

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

    const resetButtons = () => {

        clearInterval(intervalId)
    
        stopButton.style.display = 'none'
        solveButton.style.display = 'inline-block'
        winMessage.style.display = 'none'  

    }
});

