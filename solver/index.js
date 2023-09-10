import { board } from "../tables/grid/board.js";
import { AVAIABLE_COLORS, SOLVE_STEP_TIME } from "../tables/grid/config.js";
import { verifyCol, verifyGrid, verifyPad, verifyRow } from "../tables/grid/verify.js";
import { arraySample } from "../utils/arraySample.js";
import { setColor } from "../utils/color.js";
import { resetRow } from "../utils/fill.js";

export const solve = () => {
    let y = 0;
    let x = 0;

    const intervalId = setInterval(() => {

        const row = board[y]
        const square = row[x]

        setColor(square, arraySample(AVAIABLE_COLORS))
                    
        const index = square.getAttribute('id')
        if  (verifyRow(index) === false || verifyRow(index) === undefined)  {            
            
            resetRow(y)
            x = -1 // Reset row, x will be set to 0 later
        }
        
        verifyCol(index)
        verifyPad(index)
        // console.log(verifyRow(index))
        // if  (verifyRow(index) === false || verifyRow(index) === undefined)  {            
            
        //     resetRow(y)
        //     x = -1 // Reset row, x will be set to 0 later
        // }
        // else if (verifyCol(index) === false) { 
            
        //     resetRow(y)
        //     y = -1
        //     x = -1 
        // }
        // else if (verifyPad(index) === false || verifyPad(index) === undefined) {
            
        //     resetRow(y)
        //     const pad = getPadStart(x, y)
        //     x = pad[0] - 1
        //     y = pad[1]
        // }

        x++

        if (x === row.length) {

            x = 0
            y++
            if (y === board.length) {
                // All blocks have been colored, so stop the interval
                console.log(verifyGrid())
                const p = document.getElementById('win-p')
                p.style.display = 'block'

                if (!verifyGrid()) p.innerText = 'Too difficult 😿'
                
                clearInterval(intervalId)
            }
        }
    }, SOLVE_STEP_TIME)

    return intervalId
}