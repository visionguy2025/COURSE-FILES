// HTML ELEMENTS
const choosenSection = document.querySelector('section:nth-of-type(2)')
// debugger
// window.scroll({cancelable: false,bubbles: false})
// window.scrollTo({behavior: 'smooth'})

// STATE VALUES
let scrollDirection = 'down'
let scrollDirectionIcon = '▼'
let value = 0
let isScrollLocked = false
let prevScrollY = window.scrollY
let firstTime = true
// let RAF_value = 0
// let ticking = false

// var runAnimation = false
// function testClosureAnimation() {
//     // DO SOMETHING HERE
//     console.log(runAnimation)
//     if(runAnimation) {
//         requestAnimationFrame(testClosureAnimation)
//     }
// }

// OPERATIONS
function setCurrentTime() {
    let video = document.querySelector('#video')
    let videoDuration = video.duration
    let videoCurrentTime = value * videoDuration / 100
    
    video.currentTime = videoCurrentTime
    
    // if(!ticking) {
    //     window.requestAnimationFrame(
    //         () => {
    //             video.currentTime = videoCurrentTime
    //             ticking = false
    //         }
    //     )
    //     ticking = true
    // }

    // console.log(
    //     value,
    //     Math.round(value)
    // )
    
    // function customRAF() {
    //     console.log(video.currentTIme)
    //     video.currentTime = videoCurrentTime
    //     RAF_value < 100 ? requestAnimationFrame(customRAF) && RAF_value++ : RAF_value
    // }
    // requestAnimationFrame(customRAF)

    // requestAnimationFrame(testClosureAnimation)
    // runAnimation = true
    
    let testing = `
    currentTime: ${video.currentTime} / duration: ${video.duration} | % → ${videoCurrentTime}
    value: ${value}
    `
    
    console.log(testing)

    let newValue = (videoCurrentTime / video.duration) * 100
    // console.log(newValue)
    value = newValue

    // return newValue
}
function scrollLockSection() {
    // VARIABLES
    let lockHeight =  choosenSection.offsetTop
    let scrollValue = window.scrollY

    // UNLOCK FEATURE IF ITS NOT FOR THE FIRST TIME
    if(lockHeight > scrollValue) {
        firstTime = false
    }

    // SET SCROLL DIRECTION
    if(prevScrollY > window.scrollY) {
        scrollDirection = 'up'
        scrollDirectionIcon = '▲'
    } else if(prevScrollY < window.scrollY) {
        scrollDirection = 'down'
        scrollDirectionIcon = '▼'
    }

    // LOCK SCROLL IF REACHED TO THAT SECTION
    if(lockHeight <= scrollValue && scrollDirection == 'down') {
        if(!firstTime) {
            value <= 100-1 ? isScrollLocked = true : isScrollLocked = false // 100 instead 200
        }
    } else if (lockHeight >= scrollValue && scrollDirection == 'up') {
        value >= 0+1 ? isScrollLocked = true : isScrollLocked = false
    }

    // LOCK SCROLLING
    if(isScrollLocked) {
        window.scrollTo({top: lockHeight})
    }

    // SET CURRENTTIME VALUE FOR VIDEO
    if(scrollDirection == 'up' && isScrollLocked) {
        value-1 >= 0 ? value-- : value
    } else if(scrollDirection == 'down' && isScrollLocked) {
        value+1 <= 100 ? value++ : value // 100 instead 200
    }

    // DIAGNOSE VALUE CHANGES
    var diagnose = `
        lockHeight: ${lockHeight} / scrollY: ${scrollValue}
        <br>
        Value: ${value}
        <br>
        isLocked: ${isScrollLocked}
        <br>
        scrollDirection: ${scrollDirection} ${scrollDirectionIcon}
    `
    // choosenSection.innerHTML = diagnose
    // console.log(diagnose)

    // RESET PREVIOUS SCROLLY VALUE
    prevScrollY = window.scrollY

    // DRAG VIDEO CURRENTTIME BY SCROLLING
    if(isScrollLocked) {
        setCurrentTime()
        // value = setCurrentTime()
        // console.log(value)
    }

    // // SET VIDEO CURRENT TIME FOR EVERY MOMENT DURING 10MS INTERVAL
    // let customInterval = setInterval(
    //     () => {
    //         if(isScrollLocked) {
    //             setCurrentTime()
    //         }
    //     }, 10 // in every 10ms
    // )

    // // STOP INTERVAL AFTER ONCE
    // setTimeout(
    //     () => {
    //         clearInterval(customInterval)
    //         // runAnimation = false
    //     }, 10 // after 10ms
    // )
}

// EVENTS
window.addEventListener('scroll', scrollLockSection)
// window.addEventListener('wheel', scrollLockSection)

// NOTES
var idea = `
    problems on current version
        • scrolls to lockHeight everytime causes jiggle effect | try to disable scroll instead set position as lockHeight everytime OR cover up with video content, 100wv-100vh and position fixed, overflow not hidden for temporary
        • scrolling doesnt change currentTime as real time, during scroll event, it calculates, then it changes currentTime which it causes skip video not rolling real time | wont work but try just teststate inside function, and state runs or stops setTimeout
        • ANOTHER SUGGESTION IS USING 100 FRAMES (IMAGES) INSTEAD VIDEO & REPLACE BG IMAGE OR IMAGE TAG URL NUMBER

    new possible versions
        • try scroll false instead scrollTop
        • long section with padding or margin for scroll space instead lock scroll
`
// console.log(idea)

// function abc() {
//     console.log('+')
//     requestAnimationFrame(abc())
// }
// window.addEventListener('keypress', (event) => {
//     if(event.key.toLowerCase() == 'h' && event.shiftKey) {
//         abc()
//     }
// })
// setTimeout(
//     cancelAnimationFrame(abc), 1000
// )

// let newInterval = setInterval(() => {
//     let video = document.querySelector('#video')
//     video.currentTime = value
// }, 1) // in every 1 milli seconds
// setTimeout(() => {
//     clearInterval(newInterval)
// }, 10000) // after 10 seconds
