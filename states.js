import { COLORS } from "./config/config.js"

export const getPickedColor = () => localStorage.getItem('pickedColor') ? localStorage.getItem('pickedColor') : COLORS.BLUE
export const setPickedColor = (color) => localStorage.setItem('pickedColor', color)