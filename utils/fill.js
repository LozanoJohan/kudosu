import { AVAIABLE_COLORS, STARTING_COLORS_IN_ROW, UNFILL_COLOR } from "../tables/grid/config.js"
import { board } from "../tables/grid/board.js"
import { setColor } from "./color.js"

export const fillSomeSpots = () => {

    board.forEach((_, y) => {

        const randomXPositions = []

        for (let i = 0; i < STARTING_COLORS_IN_ROW; i++) {

            randomXPositions.push(Math.floor(9 * Math.random()))
        }
        randomXPositions.forEach(x => {

            const squareElement = board[y][x]

            setColor(squareElement, arraySample(AVAIABLE_COLORS))
            squareElement.classList.add("blocked");
        })    
    })
}

export const resetBoard = () => {
    const blockedSquares = document.querySelectorAll('.blocked')
    blockedSquares.forEach(s => s.classList.remove('blocked'))
    
    board.forEach(row => row.forEach(s => setColor(s, UNFILL_COLOR)))
}

const arraySample = (arr) => {
    const length = arr.length

    const index = Math.floor(length * Math.random())
    return arr[index]
}