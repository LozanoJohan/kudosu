export let GRID_WIDTH = 3
export let GRID_HEIGHT = GRID_WIDTH

export let BOARD_LENGTH = GRID_WIDTH ** 2

export let SOLVE_STEP_TIME = 1; // milisecons

export let STARTING_COLORS_IN_ROW = GRID_WIDTH

export let SOLVE_TIMEOUT = 60000; // miliseconds

export const COLORS = {
    RED: 'red',
    GREEN: 'green',
    BLUE: 'blue',
    PINK: 'pink',
};

// Get colors whose index is less or equal that the width of the grid

export let AVAIABLE_COLORS = Object.keys(COLORS).filter((_, i) => i < GRID_WIDTH)

export const UNFILL_COLOR = 'white'

export let COLORS_LENGTH = AVAIABLE_COLORS.length; 

export const getColorByIndex = (i) => AVAIABLE_COLORS[i]

export const setDifficulty = (difficulty = 2) => {

    GRID_WIDTH = difficulty
    GRID_HEIGHT = GRID_WIDTH
    BOARD_LENGTH = GRID_WIDTH ** 2
    SOLVE_STEP_TIME = 1; // milisecons
    STARTING_COLORS_IN_ROW = GRID_WIDTH

    AVAIABLE_COLORS = Object.keys(COLORS).filter((_, i) => i < GRID_WIDTH)
    COLORS_LENGTH = AVAIABLE_COLORS.length; 
}