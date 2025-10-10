// VALUES
const video = document.getElementById('video')
let value = 0
let isScrolling = false

// SCROLL EVENT BY WHEEL
window.addEventListener('wheel', (event) => {
    // SET ADJUSTING VALUE
    value = event.deltaY / 100

    // DETECT IS SCROLLING OR NOT
    if(!isScrolling) {
        isScrolling = true
    }
    setTimeout(
        () => {
            if(isScrolling) {
                isScrolling = false
            }
        }, 100
    )
})

// SET VIDEO CURRENT TIME DURING SCROLLING
setInterval(
    () => {
        if(isScrolling) {
            console.log(value)
            let condition = video.currentTime+value<=video.duration && video.currentTime+value>=0
            if(condition) {
                video.currentTime += value
            }
        }
    }, 80
)
