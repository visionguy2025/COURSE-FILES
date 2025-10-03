// STATES
// let isMobile = false
// let isOverlay = false

// MANAGE EVENTS
window.addEventListener('scroll', () => {
    if(window.scrollY > 400) {
        document.getElementById('toTop').style.visibility = `visible`
        document.getElementById('toTop').style.opacity = `100%`
    } else {
        document.getElementById('toTop').style.visibility = `hidden`
        document.getElementById('toTop').style.opacity = `0%`
    }
})
// window.addEventListener('resize', () => {
//     let navDisplayStatus = document.querySelector('.headerContainer__navbar').style.display
//     if(window.innerWidth > 768 && isMobileNav) {
//         if(navDisplayStatus == 'flex') {
//             enableMobileNav()
//             isMobileNav = false
//             console.log('CONDITION 1')
//             document.querySelector('.headerContainer__navbar').style.display = `flex`
//         } else {
//             enableMobileNav()
//             isMobileNav = false
//             console.log('CONDITION 2')
//             document.querySelector('.headerContainer__navbar').style.display = `none`
//         }
//     } else {
//         if(navDisplayStatus == 'none') {
//             enableMobileNav()
//             isMobileNav = false
//             console.log('CONDITION 3')
//             document.querySelector('.headerContainer__navbar').style.display = `flex`
//         }
//     }
// })
