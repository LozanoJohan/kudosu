export const GRID_WIDTH = 3
export const GRID_HEIGHT = 3

export const SOLVE_STEP_TIME = 10; // milisecons

export const STARTING_COLORS_IN_ROW = 3

export const COLORS = {
    RED: 'rgb(200, 0, 0)',
    GREEN: 'rgb(0, 200, 0)',
    BLUE: 'rgb(0, 0, 200)',
};

export const AVAIABLE_COLORS = [
    COLORS.RED,
    COLORS.GREEN,
    COLORS.BLUE
]

export const UNFILL_COLOR = 'rgb(198, 198, 198)'

export const COLORS_LENGTH = AVAIABLE_COLORS.length; 

export const getColorByIndex = (i) => AVAIABLE_COLORS[i]

