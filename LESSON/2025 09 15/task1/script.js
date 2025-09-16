// SELECT ELEMENTS
const magnifier = document.getElementById('magnifier')

// STATES
let isMouseDown = false

// FEATURE DRAGGING FOR MAGNIFIER
const dragNdrop = (e) => {
    magnifier.style.left = `${e.pageX}px`
    magnifier.style.top = `${e.pageY}px`
}

// WATCHING EVENTS FOR LMB STATUS
magnifier.addEventListener('mousedown', () => {isMouseDown = true})
document.addEventListener('mouseup', () => {isMouseDown = false})
magnifier.addEventListener('mouseleave', () => {isMouseDown = false})

// ACTIVATE DRAGGING
magnifier.addEventListener('mousemove', (e) => {
    if(isMouseDown) {
        dragNdrop(e)
    }
})
