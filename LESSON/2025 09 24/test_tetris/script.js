const container = document.querySelector('.container')

let positionY = 0
let randomX = Math.round(Math.random() * 30)

let randomRGBColor = [
    Math.round(Math.random() * 255),
    Math.round(Math.random() * 255),
    Math.round(Math.random() * 255)
]

var box = document.createElement('div')
box.classList.add('box')
box.classList.add('box1')
container.appendChild(box)

document.querySelector('.box1').style.backgroundColor = `rgba(${randomRGBColor}, 50%)`
document.querySelector('.box1').style.gridColumnStart = randomX
document.querySelector('.box1').style.gridRowStart = -1

var box = document.createElement('div')
box.classList.add('box')
box.classList.add('box2')
container.appendChild(box)

document.querySelector('.box1').style.backgroundColor = `rgba(${randomRGBColor}, 50%)`
document.querySelector('.box1').style.gridColumnStart = randomX
document.querySelector('.box1').style.gridRowStart = -1

function falling(boxName) {
    var fallBlock = setInterval(
        () => {
            console.log(positionY)
            if(positionY == 51) {
                clearInterval(fallBlock)
            } else {
                positionY += 1
            }
            boxName.style.gridRowStart = positionY
        }, 1000
    )
}

falling(document.querySelector('.box1'))

setTimeout(
    () => {
        falling(document.querySelector('.box2'))
    }, 3000
)
