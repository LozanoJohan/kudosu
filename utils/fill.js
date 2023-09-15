import { AVAIABLE_COLORS, BOARD_LENGTH, STARTING_COLORS_IN_ROW, UNFILL_COLOR } from "../config/config.js"
import { board } from "../components/board.js"
import { getColorsCount, setColor } from "./color.js"
import { arraySample } from "./arraySample.js"
import { getColElements, getRowElements } from "./getElements.js"
import { verify, verifyCol, verifyPad, verifyRow } from "./verify.js"

export const fillSomeSpots = () => {

    board.forEach((_, y) => {

        const randomXPositions = []

        for (let i = 0; i < STARTING_COLORS_IN_ROW; i++) {

            randomXPositions.push(Math.floor(BOARD_LENGTH * Math.random()))
        }
        randomXPositions.forEach(x => {

            const squareElement = board[y][x]

            setColor(squareElement, arraySample(AVAIABLE_COLORS))
            squareElement.classList.add("blocked");
        })    
    })

    if (isBoardImposible()) {

        resetBoard()
        fillSomeSpots()
    }
}

const isBoardImposible = () => {

    board.forEach((row) => {

        row.forEach(square => {

            const verifyArr = [verifyCol(square.getAttribute('id')), verifyRow(square.getAttribute('id')), verifyPad(square.getAttribute('id'))]
            if (verifyArr.some(verify => verify === undefined)) return true
        })
    })
    return false
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
