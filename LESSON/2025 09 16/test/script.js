const box = document.getElementById('box')

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

let positionX = Number(box.style.left)
let positionY = Number(box.style.top)
let maxWidth = window.innerWidth
let maxHeight = window.innerHeight

window.addEventListener('keypress', (e) => {
    const key = event.key.toLowerCase()

    switch (key) {
        case 'w':
            if(positionY > 0) {
                positionY -= 1
            }
            // console.log(positionY)
            // console.log('↑')
            setPositionOfBox()
            break
        case 's':
            if(positionY < maxHeight) {
                positionY += 1
            }
            // console.log(positionY)
            // console.log('↓')
            setPositionOfBox()
            break
        case 'a':
            if(positionX > 0) {
                positionX -= 1
            }
            // console.log(positionX)
            // console.log('←')
            setPositionOfBox()
            break
        case 'd':
            if(positionX < maxWidth) {
                positionX += 1
            }
            // console.log(positionX)
            // console.log('→')
            setPositionOfBox()
            break
        case 'w' && event.ctrlKey:
            e.preventDefault()
            if (positionY-10 > 0) {
                positionY -= 10
            }
            setPositionOfBox()
        case 'w' && event.ctrlKey:
            e.preventDefault()
            if (positionY+10 < maxWidth) {
                positionY += 10
            }
            setPositionOfBox()
        case 'w' && event.ctrlKey:
            e.preventDefault()
            if (positionX-10 > 0) {
                positionX -= 10
            }
            setPositionOfBox()
        case 'w' && event.ctrlKey:
            e.preventDefault()
            if (positionX+10 < maxHeight) {
                positionX += 10
            }
            setPositionOfBox()
    }
})
