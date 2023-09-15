import { setPickedColor } from "../states.js";
import { drawBoard } from "./board.js";
import { COLORS, GRID_WIDTH, UNFILL_COLOR, setDifficulty } from "../config/config.js";
import { fillSomeSpots, resetBoard } from "../utils/fill.js";
import { currentColorElement, drawColorPicker } from "./colorPicker.js";
import { stopSolving } from "../solver/index.js";

for (let i = 0; i < Object.keys(COLORS).length; i++) {

    const difficultyButton = document.createElement("div")
    difficultyButton.classList.add("difficulty-button")
    difficultyButton.innerText = i + 2

    difficultyButton.addEventListener("click", () => {
        setDifficulty(i+2)
        
        drawBoard()
        drawColorPicker()

        setPickedColor(null)
        currentColorElement.style.backgroundColor = null

        stopSolving()

        fillSomeSpots()        
    })

    document.querySelector(".difficulty-buttons").appendChild(difficultyButton)
}