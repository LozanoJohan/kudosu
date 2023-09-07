import { GRID_HEIGHT, GRID_WIDTH } from "./tables/grid/config.js";
import { board } from "./tables/grid/board.js";
import { getPadStart, getX, getY } from "./utils/positions.js";



export const getRowElements = (squareIndex) => {

    const index = getY(squareIndex)
    return board[index];
}


export const getColElements = (squareIndex) => {

    const index = getX(squareIndex)

    const colElements = [];
    board.forEach(row => colElements.push(row[index]))

    return colElements;
}


export const getPadElements = (squareIndex) => {

    const padElements = []

    const x = getX(squareIndex)
    const y = getY(squareIndex)

    const [startX, startY] = getPadStart(x, y);

    board.forEach((row, y) => {
        if (y >= startY && y < startY + GRID_HEIGHT) {

            const padRow = row.slice(startX, startX + GRID_WIDTH);
            padRow.forEach(square => padElements.push(square))
        }
    })

    return padElements;
}