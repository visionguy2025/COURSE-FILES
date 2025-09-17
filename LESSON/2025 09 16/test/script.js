const container = document.getElementById('container')
const box = document.getElementById('box')

let positionX = Number(box.style.left)
let positionY = Number(box.style.top)
let maxWidth = window.innerWidth
let maxHeight = window.innerHeight
container.style.borderLeft = `2px solid red`
container.style.borderTop = `2px solid red`

// ADD INPUT WHEN FOCUSED THERE, JUST TYPING, WHEN NOT, MOVE BOX
// OR WHEN CLICK, CHANGE COLOR AND ABLE TO MOVE
// WHEN MOVING OR ACTIVE TO MOVE, START ANIMATION

const setPositionOfBox = (text) => {
    box.style.left = positionX + 'px'
    box.style.top = positionY + 'px'

    box.textContent = text
    box.style.boxShadow = `0 0 10px red, 0 0 40px red, 0 0 100px red`

    if(positionX == maxWidth) {
        container.style.borderRight = `2px solid red`
    } else {
        container.style.borderRight = `none`
    }

    if(positionX == 0) {
        container.style.borderLeft = `2px solid red`
    } else {
        container.style.borderLeft = `none`
    }

    if(positionY == maxHeight) {
        container.style.borderBottom = `2px solid red`
    } else {
        container.style.borderBottom = `none`
    }

    if(positionY == 0) {
        container.style.borderTop = `2px solid red`
    } else {
        container.style.borderTop = `none`
    }
}

window.addEventListener('keydown', (event) => {
    if(event.key === 'w' && !event.ctrlKey) {
        if(positionY > 0) {
            positionY -= 1
        }
        setPositionOfBox('↑')
    } else if(event.key === 's' && !event.ctrlKey) {
        if(positionY < maxHeight) {
            positionY += 1
        }
        setPositionOfBox('↓')
    } else if(event.key === 'a' && !event.ctrlKey) {
        if(positionX > 0) {
            positionX -= 1
        }
        setPositionOfBox('←')
    } else if(event.key === 'd' && !event.ctrlKey) {
        if(positionX < maxWidth) {
            positionX += 1
        }
        setPositionOfBox('→')
    } else if(event.key == 'w' && event.ctrlKey) {
        event.preventDefault()
        if (positionY-10 > 0) {
            positionY -= 10
        }
        setPositionOfBox('▲▲')
    } else if(event.key == 's' && event.ctrlKey) {
        event.preventDefault()
        if (positionY+10 < maxHeight) {
            positionY += 10
        }
        setPositionOfBox('▼▼')
    } else if(event.key == 'a' && event.ctrlKey) {
        event.preventDefault()
        if (positionX-10 > 0) {
            positionX -= 10
        }
        setPositionOfBox('◄◄')
    } else if(event.key == 'd' && event.ctrlKey) {
        event.preventDefault()
        if (positionX+10 < maxWidth) {
            positionX += 10
        }
        setPositionOfBox('►►')
    }
})

window.addEventListener('keyup', () => {
    box.textContent = ''
    box.style.boxShadow = `none`
})
