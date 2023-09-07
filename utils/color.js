export const setColor = (element, color) => {

    if (!element.getAttribute('class').includes('blocked'))
        element.style.background = color;
}

