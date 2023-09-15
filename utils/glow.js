export const addGlow = (squares) => {

    squares.map(square => {
        
        if (!square.classList.contains('blocked')) {

            square.classList.add('square-glow')
            square.style.borderColor = 'black'
        }
    })
}

export const setWrong = (squares) => {

    squares.map(square => {
        
        if (!square.classList.contains('blocked')) {

            square.classList.remove('square-glow')
            square.style.borderColor = 'red'
        }
    })
}

export const setDefault = () => {

    const squares = document.querySelectorAll('.square')

    Array.from(squares).map(square => {
        
        if (!square.classList.contains('blocked'))
            square.style.borderColor = ''
    })
}