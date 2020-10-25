const container = document.getElementById('container');

const colors = ['red', 'blue', 'yellow', 'green', 'orange', 'purple']
// const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const SQUARES = 500;


function selectColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}


createSquares();

function createSquares() {
    for(let i = 0; i < SQUARES; i++){
        const square = document.createElement('div');
        square.classList.add('square')

        square.addEventListener('mouseover', () => {
            const color = selectColor()
            square.style.backgroundColor = color;
            square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
        })
        square.addEventListener('mouseout', () => {
            square.style.backgroundColor = "#1d1d1d";
            square.style.boxShadow = "0 0 2px #000";
        })

        container.appendChild(square)
    }
}
