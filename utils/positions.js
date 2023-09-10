import { GRID_HEIGHT } from "../tables/grid/config.js";

export const getX = (i) => {
    return parseInt(i.split('-')[1])
}

export const getY = (i) => {
    return parseInt(i.split('-')[0])
}

export const getPadStart = (x, y) => {
    const startX = Math.floor(x / GRID_HEIGHT) * GRID_HEIGHT; 
    const startY = Math.floor(y / GRID_HEIGHT) * GRID_HEIGHT; 

    return [ startX, startY ]
}