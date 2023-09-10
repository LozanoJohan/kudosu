export const setColor = (element, color) => {

    if (!element.classList.contains('blocked'))
        element.style.background = color;
}

export const getColorsCount = (colors) => {

    const colorsCount = new Map();

    colors.forEach(color => {
        colorsCount[color] !== undefined ? colorsCount[color] += 1 : colorsCount[color] = 1;
    })

    const values = Array.from(Object.values(colorsCount))
    return values
}