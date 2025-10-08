// HTML ELEMENTS
const choosenSection = document.querySelector('section:nth-of-type(2)')

// STATE VALUES
let isScrollLocked = false
let value = 0
let scrollDirection = 'lower'
let prevScrollY = 0

// EVENT FUNCTION
function untitled() {
    // VARIABLES
    let lockHeight =  choosenSection.offsetTop
    let scrollValue = window.scrollY

    // LOCK SCROLL IF REACHED TO THAT SECTION
    if(lockHeight <= scrollValue) {
        isScrollLocked = true
    } else {
        isScrollLocked = false
    }

    // LOCK SCROLLING
    if(isScrollLocked) {
        window.scrollTo(
            {
                top: lockHeight
            }
        )
    }

    // SET SCROLL DIRECTION
    if(prevScrollY > window.scrollY) {
        scrollDirection = 'upper'
    } else if(prevScrollY < window.scrollY) {
        scrollDirection = 'lower'
    }
    prevScrollY = window.scrollY

    // SET CURRENTTIME VALUE FOR VIDEO
    if(scrollDirection == 'upper') {
        value--
    } else if(scrollDirection == 'lower') {
        value++
    }

    console.log(value)
    choosenSection.innerHTML = `Value: ${value} <br> isLocked: ${isScrollLocked}`
}

// EVENTS
window.addEventListener('scroll', untitled)


// INCOMPLETE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
