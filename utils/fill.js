import { AVAIABLE_COLORS, STARTING_COLORS_IN_ROW, UNFILL_COLOR } from "../tables/grid/config.js"
import { board } from "../tables/grid/board.js"
import { getColorsCount, setColor } from "./color.js"
import { arraySample } from "./arraySample.js"
import { getColElements, getRowElements } from "./getElements.js"

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

    //if (!checkStartingBoard()) fillSomeSpots()
}

const checkStartingBoard = () => {

    board.forEach((row) => {

        const index = row[0].getAttribute('id')
        const squares = getColElements(index)

        const colors = squares.filter(c => c !== UNFILL_COLOR).map(s => s.style.backgroundColor)
        const colorsCount = getColorsCount(colors)
        console.log(colorsCount)

        if (colorsCount.some(c => c > 3)) return false
    })
}

export const resetBoard = () => {
    
    board.forEach(row => { row.forEach(s => {
        if (s.classList.contains('blocked')) s.classList.remove('blocked')

        setColor(s, UNFILL_COLOR)
        s.classList.remove('square-glow')
        s.style.borderColor = 'black'
    })
    })
}

export const resetRow = (y) => {

    board[y].forEach(square => {

        if (square.classList.contains('blocked')) return

        setColor(square, UNFILL_COLOR)
        square.classList.remove('square-glow')
        square.style.borderColor = 'black'
    })
}