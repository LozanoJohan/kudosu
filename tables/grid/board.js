import { GRID_HEIGHT, GRID_WIDTH } from "./config.js";

export const board = []
const gridElement = document.querySelector(".grid");

for (let y = 0; y < GRID_HEIGHT ** 2; y++) {

    const row = []
    const rowElement = document.createElement("div");

    rowElement.classList.add("row");
    if (y % 3 === 0 && y !== 0) rowElement.classList.add("row-bottom")

    gridElement.appendChild(rowElement);

    for (let x = 0; x < GRID_WIDTH ** 2; x++) {

        const squareElement = document.createElement("div");
        squareElement.setAttribute("id", `${y}-${x}`);

        if (x % 3 === 0 && x !== 0) squareElement.classList.add("square-left")
        squareElement.classList.add("square");
        
        rowElement.appendChild(squareElement);

        //
        row.push(squareElement)
    }
    board.push(row)
}