// TASK 1
let task1 = `get random value between 0 and 100`
window.addEventListener(
    'keypress', (event) => {
        if(event.key == 'r') {
            console.log(
                Math.round(
                    Math.random() * 100
                )
            )
        }
    }
)

// TASK 2
let task2 = `get input value's root`
window.addEventListener(
    'keypress', (event) => {
        if(event.key == 's') {
            let value = Number(prompt('Enter value: '))
            let root = value ** (1/2)
            console.log(root)
        }
    }
)

// TASK 3
const addBtn = document.getElementById('add')
const title = document.getElementById('title')
const container = document.querySelector('.container')
let uniqueID = 0
function randomColor() {
    let color = `
        rgb(
            ${Math.round(Math.random() * 255)},
            ${Math.round(Math.random() * 255)},
            ${Math.round(Math.random() * 255)}
        )
    `
    return color
}
function removeNote(element) {
    let selected_id = element.id
    selected_id = selected_id.slice(4, selected_id.length)
    container.removeChild(document.getElementById(`note_${selected_id}`))
}
function createNewBox() {
    if(title.value != '') {
        let newBox = `
            <div class="note" style="background-color: ${randomColor()};" id="note_${uniqueID}">
                <div class="note_content flexCC"> ${title.value} </div>
                <button class="noteButton flexCC" onclick="removeNote(this)" id="btn_${uniqueID}">DELETE</button>
            </div>
        `
        uniqueID++
        container.innerHTML += newBox
        title.value = ''
    }
}
addBtn.addEventListener('click', createNewBox)
