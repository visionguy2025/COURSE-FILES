// PHASE 1
// const container = document.querySelector('#container')
// let a = document.getElementById('container').children[1].previousElementSibling.lastChild.parentElement.parentNode.outerHTML
// console.log(a)


// PHASE 2
// let b = document.createElement('div')
// b.className = 'new'
// b.id = 'dynamic'
// b.style.width = '100px'
// b.style.height = '20px'
// b.style.backgroundColor = 'red'
// container.appendChild(b)
// container.removeChild(container.children[2])


// PHASE 3
// const container = document.getElementById('container');
// const btn = document.querySelector('#btn');
// const inp = document.querySelector('#inp');
// const bottom = document.querySelector('#bottom');
// function randomColor() {
//     const hexData = "0123456789abcdef";
//     let hexColor = "#";
//     for(let i=1; i<=6; i++) {
//         var randomHexElement = Math.round(Math.random() * (hexData.length-1));
//         hexColor += hexData[randomHexElement];
//     };
//     return hexColor;
// };
// function deleteItem(element) {
//     element.parentElement.remove();
// };
// btn.addEventListener('click', () => {
//     let a = document.createElement('div');
//     let c = document.createElement('button');
//     let color = randomColor();
//     a.style.width = "100%";
//     a.style.height = "30px";
//     a.style.backgroundColor = color;
//     a.id = 'dynamic';
//     a.innerText = inp.value;
//     inp.value = '';
//     c.innerText = "del";
//     a.appendChild(c);
//     bottom.appendChild(a);
//     c.setAttribute('onclick', 'deleteItem(this)');
// });


// PHASE 4
const container = document.getElementsByClassName('container')[0];
container.addEventListener('click', (event) => {
    // GENERATE RANDOM VALUES
    let randomColor = `rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})`;
    let randomX = Math.round(Math.random() * window.innerWidth);
    let randomY = Math.round(Math.random() * window.innerHeight);
    let randomWidth = Math.floor(Math.random() * 50);
    randomWidth <= 10 ? randomWidth += 10 : randomWidth;
    let randomHeight = Math.floor(Math.random() * 50);
    randomHeight <= 10 ? randomHeight += 10 : randomHeight;
    let currentX = event.clientX;
    let currentY = event.clientY;

    // CREATE NEW BOX
    let newBox = document.createElement('div');
    newBox.style.width = randomWidth + 'px';
    newBox.style.height = randomHeight + 'px';
    newBox.class = 'box';
    newBox.style.position = 'absolute';
    newBox.style.backgroundColor = randomColor;
    newBox.style.transform = "translate(-50%, -50%)";    

    // RANDOM POSITION OR CURSOR POSITION
    if(event.shiftKey) {
        newBox.style.left = randomX + 'px';
        newBox.style.top = randomY + 'px';
    } else {
        newBox.style.left = currentX + 'px';
        newBox.style.top = currentY + 'px';
    };

    // ADD CREATED BOX INTO THE CONTAINER
    container.appendChild(newBox);
});
