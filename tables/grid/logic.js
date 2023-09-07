import { getColElements, getPadElements, getRowElements } from "../../getElements.js";
import { addGlow } from "../../utils/glow.js";
import { GRID_WIDTH } from "./config.js"
import { board } from "./board.js";

export const verifyGrid = () => {

    for (let y = 0; y < board.length; y++) {
        if (!verifyRow(`${y}- `)) return false
    }
    return true;
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
    if (colors.includes("")) return false;

    const colorsCount = new Map();

    colors.forEach(color => {
        colorsCount[color] !== undefined ? colorsCount[color] += 1 : colorsCount[color] = 1;
    })

    const COLOR_NUMBER = GRID_WIDTH;
    const values = Array.from(Object.values(colorsCount));
    console.log(colorsCount)
    console.log(values)
    const isValid = values.every(num => num === COLOR_NUMBER);
    console.log('isValid', isValid)
    if (isValid) addGlow(elements)

    return isValid
}


