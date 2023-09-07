export const addGlow = (squares) => {

    squares.map(square => {
        
        if (!square.classList.contains('blocked'))
        square.classList.add('square-glow')
    })
}