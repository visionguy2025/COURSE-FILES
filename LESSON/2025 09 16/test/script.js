const box = document.getElementById('box')

let positionX = Number(box.style.left)
let positionY = Number(box.style.top)
let maxWidth = window.innerWidth
let maxHeight = window.innerHeight

// ADD INPUT WHEN FOCUSED THERE, JUST TYPING, WHEN NOT, MOVE BOX
// OR WHEN CLICK, CHANGE COLOR AND ABLE TO MOVE
// WHEN REACH TO BORDER OF WINDOW, USE GRADIENT BG AND GRADIENT CORNER COLORS
// WHEN MOVING OR ACTIVE TO MOVE, START ANIMATION

const setPositionOfBox = () => {
    box.style.left = positionX + 'px'
    box.style.top = positionY + 'px'

    // console.log(
    //     `
    //         X: ${box.style.left}
    //         Y: ${box.style.top}
    //     `
    // )
}

window.addEventListener('keydown', (event) => {
    // console.log(
    //     `
    //         eventSelf: ${event}
    //         key: ${event.key}
    //         ctrl?: ${event.ctrlKey}
    //     `
    // )

    // console.log(
    //     event
    // )
    // console.log(
    //     event.key
    // )
    // console.log(
    //     event.ctrlKey
    // )

    if(event.key === 'w' && !event.ctrlKey) {
        if(positionY > 0) {
            positionY -= 1
        }
        // console.log('↑', positionY)
        setPositionOfBox()
    } else if(event.key === 's' && !event.ctrlKey) {
        if(positionY < maxHeight) {
            positionY += 1
        }
        // console.log('↓', positionY)
        setPositionOfBox()
    } else if(event.key === 'a' && !event.ctrlKey) {
        if(positionX > 0) {
            positionX -= 1
        }
        // console.log('←', positionX)
        setPositionOfBox()
    } else if(event.key === 'd' && !event.ctrlKey) {
        if(positionX < maxWidth) {
            positionX += 1
        }
        // console.log('→', positionX)
        setPositionOfBox()
    } else if(event.key == 'w' && event.ctrlKey) {
        event.preventDefault()
        if (positionY-10 > 0) {
            positionY -= 10
        }
        setPositionOfBox()
    } else if(event.key == 's' && event.ctrlKey) {
        event.preventDefault()
        if (positionY+10 < maxHeight) {
            positionY += 10
        }
        setPositionOfBox()
    } else if(event.key == 'a' && event.ctrlKey) {
        event.preventDefault()
        if (positionX-10 > 0) {
            positionX -= 10
        }
        // console.log('aaaaaaaaaaaa')
        setPositionOfBox()
    } else if(event.key == 'd' && event.ctrlKey) {
        event.preventDefault()
        if (positionX+10 < maxWidth) {
            positionX += 10
        }
        setPositionOfBox()
    }
})
