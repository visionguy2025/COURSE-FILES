const container = document.querySelector('.container')
const chara = document.querySelector('.chara')

let isJumpAvailable = true
let charaPosX = chara.style.left || chara.offsetLeft

window.addEventListener('keydown', (event) => {
    let key = event.key

    // CROUCH
    if(key.toLowerCase() == 's') {
        chara.style.backgroundImage = `url(./assets/chara_crouch.png)`
        chara.style.height = `70px`
    }
    // JUMP
    else if(key.toLowerCase() == 'w') {
        if(isJumpAvailable) {
            chara.style.backgroundImage = `url(./assets/chara_jump.png)`
            chara.style.height = `110px`
            chara.style.animation = `jumpStraight 700ms linear 0.1s 1 normal forwards`
            isJumpAvailable = false
    
            setTimeout(() => {
                chara.style.backgroundImage = `url(./assets/chara.png)`
                chara.style.height = `100px`
                chara.style.animation = ``

                isJumpAvailable = true
            }, 800)
        }
    }
    // MOVE LEFT
    else if(key.toLowerCase() == 'a' && !event.shiftKey) {
        if(charaPosX-1 >= 0) {
            charaPosX--
            chara.style.left = charaPosX + 'px'
            chara.style.animation = `moveLeft 700ms linear 0s infinite`
        }
    }
    // RUN LEFT
    else if(key.toLowerCase() == 'a' && event.shiftKey) {
        if(charaPosX-10 >= 0) {
            charaPosX -= 10
            chara.style.left = charaPosX + 'px'
            chara.style.animation = `runLeft 250ms linear 0s infinite`
        }
    }
    // MOVE RIGHT
    else if(key.toLowerCase() == 'd' && !event.shiftKey) {
        if(charaPosX+1+50 <= window.innerWidth) {
            charaPosX++
            chara.style.left = charaPosX + 'px'
            chara.style.animation = `moveRight 700ms linear 0s infinite`
        }
    }
    // RUN RIGHT
    else if(key.toLowerCase() == 'd' && event.shiftKey) {
        if(charaPosX+10+50 <= window.innerWidth) {
            charaPosX += 10
            chara.style.left = charaPosX + 'px'
            chara.style.animation = `runRight 250ms linear 0s infinite`
        }
    }
})

window.addEventListener('keyup', (event) => {
    let key = event.key

    if(key.toLowerCase() == 's') {
        chara.style.backgroundImage = `url(./assets/chara.png)`
        chara.style.height = `100px`
    } else if(key.toLowerCase() == 'a' && !event.shiftKey) {
        chara.style.backgroundImage = `url(./assets/chara.png)`
        chara.style.animation = ``
    } else if(key.toLowerCase() == 'a' && event.shiftKey) {
        chara.style.backgroundImage = `url(./assets/chara.png)`
        chara.style.animation = ``
    } else if(key.toLowerCase() == 'd' && !event.shiftKey) {
        chara.style.backgroundImage = `url(./assets/chara.png)`
        chara.style.animation = ``
    } else if(key.toLowerCase() == 'd' && event.shiftKey) {
        chara.style.backgroundImage = `url(./assets/chara.png)`
        chara.style.animation = ``
    }
})
