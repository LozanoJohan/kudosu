import { board } from "../components/board.js";
import { AVAIABLE_COLORS, BOARD_LENGTH, SOLVE_STEP_TIME, UNFILL_COLOR } from "../config/config.js";
import { verifyCol, verifyGrid, verifyPad, verifyRow } from "../utils/verify.js";
import { arraySample } from "../utils/arraySample.js";
import { setColor } from "../utils/color.js";
import { setDefault } from "../utils/glow.js";

export const solve = () => {

    let y = 0
    let x = 0

    const backTrack = () => {

        if (y === 0 && x === 0) {

            clearInterval(intervalId) // Clear the interval if no solution exists
            return
        }

        const square = board[y][x]
        setColor(square, UNFILL_COLOR)

        x--
        if (x === -1) {
            x = BOARD_LENGTH - 1
            y--
        }

        const newSquare = board[y][x]
        if (newSquare.classList.contains('blocked')) backTrack()
    }

    const solveStep = () => {

        setDefault()

        const row = board[y]
        const square = row[x]

        const color = arraySample(AVAIABLE_COLORS)
        setColor(square, color)

        const index = square.getAttribute('id')

        if (verifyRow(index) === undefined || verifyCol(index) === undefined || verifyPad(index) === undefined) {

            backTrack()

        } else nextSquare()          
    }

    const nextSquare = () => {
        
        const squares = document.querySelectorAll('.square')
        squares.forEach(square => {
            if (square.style.backgroundColor === UNFILL_COLOR )square.classList.remove('square-glow')
        })
        x++

        if (x === BOARD_LENGTH) {

            x = 0
            y++


        }

        const square = board[y][x]
        if (square.classList.contains('blocked')) nextSquare()
    }

    const intervalId = setInterval(solveStep, SOLVE_STEP_TIME)

    return intervalId
}

export const onTimeOut = () => {

    const p = document.getElementById('win-p')
    p.style.display = 'block'

    if (!verifyGrid()) p.innerText = 'Too difficult 😿'
}

export const stopSolving = () => {
    clearInterval(solve())
}