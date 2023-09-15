import { getPickedColor } from "../states.js";
import { setColor } from "../utils/color.js";
import { BOARD_LENGTH, GRID_HEIGHT, GRID_WIDTH } from "../config/config.js";
import { verifyCol, verifyGrid, verifyPad, verifyRow } from "../utils/verify.js";
import { setDefault } from "../utils/glow.js";

export let board = []
const gridElement = document.querySelector(".grid");
const winMessage = document.querySelector('#win-p')

export const drawBoard = () => {
    board = []
    gridElement.innerHTML = ""

    console.log(BOARD_LENGTH)
    for (let y = 0; y < BOARD_LENGTH; y++) {

        const row = []
        const rowElement = document.createElement("div");

        rowElement.classList.add("row");
        if (y % GRID_HEIGHT === 0 && y !== 0) rowElement.classList.add("row-bottom")

        gridElement.appendChild(rowElement);

        for (let x = 0; x < BOARD_LENGTH; x++) {

            const squareElement = document.createElement("div");
            const squareId = `${y}-${x}`
            squareElement.setAttribute("id", squareId);

            if (x % GRID_WIDTH === 0 && x !== 0) squareElement.classList.add("square-left")
            squareElement.classList.add("square");
            
            squareElement.addEventListener("click", () => {

                setColor(squareElement, getPickedColor())
                
                setDefault()

                verifyCol(squareId)
                verifyPad(squareId)
                console.log(verifyRow(squareId))
    
                verifyGrid() ? winMessage.style.display = 'block' : winMessage.style.display = 'none'  
                
            });

            rowElement.appendChild(squareElement);

            row.push(squareElement)
        }
        board.push(row)
    }
}

