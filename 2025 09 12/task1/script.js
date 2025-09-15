const container = document.getElementById('container') // container <div> tag
const box = document.getElementById('box') // box <div> tag which it is inside container


// DRAG BOX
const dragNdropBox = (e) => {
    // window.getComputedStyle(box).left
    // e.pageX, e.pageY, 'cursor coordinates'
    // box.offsetLeft, box.offsetTop, 'box coordinates'

    box.style.left = `${e.pageX}px`
    box.style.top = `${e.pageY}px`
}


let isMouseDown = false // status for LMB is clicked or holding or not

box.addEventListener('mousedown', () => {isMouseDown = true}) // watching if click LMB on box object
document.addEventListener('mouseup', () => {isMouseDown = false}) // watching if release LMB on anywhere
box.addEventListener('mouseleave', () => {isMouseDown = false})

// ACTIVATE FUNCTION IF CURSOR IS ON BOX AND HOLDING LMB
box.addEventListener('mousemove', (e) => {
    if(isMouseDown) {
        dragNdropBox(e)
    }
})
