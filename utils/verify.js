import { getColElements, getPadElements, getRowElements } from "./getElements.js";
import { addGlow, setWrong } from "./glow.js";
import { BOARD_LENGTH, GRID_WIDTH, UNFILL_COLOR } from "../config/config.js"
import { board } from "../components/board.js";
import { getColorsCount } from "./color.js";

export const verifyGrid = () => {

    return Array.from(document.querySelectorAll('.square'))
                .every(square => square.style.borderColor !== 'red' 
                        && square.style.backgroundColor !== UNFILL_COLOR
                        && square.style.backgroundColor !== '')
}

export const verify = (squareID) => {

    const c = verifyCol(squareID)
    const p = verifyPad(squareID)
    const r = verifyRow(squareID)

    return c && p && r
}

export const verifyPad = (squareID) => {

    const pad = getPadElements(squareID);
    return verifyColors(pad);
}

export const verifyRow = (squareID) => {

    const row = getRowElements(squareID);
    return verifyColors(row);
}

export const verifyCol = (squareID) => {

    const col = getColElements(squareID);
    return verifyColors(col);
}


const verifyColors = (elements) => {

    const colors = elements.map(element => element.style.backgroundColor)
    const colorsWithoutUnset = colors.filter(color => color !== UNFILL_COLOR && color !== "")

    const values = getColorsCount(colors)
    const valuesWithoutUnset = getColorsCount(colorsWithoutUnset)

    const COLOR_NUMBER = Math.floor(BOARD_LENGTH / GRID_WIDTH)

    if (valuesWithoutUnset.some(num => num > COLOR_NUMBER)) return undefined // More than 3 of any color
    if (colors.includes("") || colors.includes(UNFILL_COLOR)) return null // There is unset square

    if (values.every(num => num === COLOR_NUMBER)) {
        addGlow(elements)
        return true  // Elements are valid
    }   
    else {
        setWrong(elements)
        return false  // Elements are invalid
    } 
}

