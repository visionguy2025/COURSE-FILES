// VARIABLES
let isLight = true
let isMobileNav = false

// FEATURE HANDLERS
const switchLight = () => {
    if(!isLight) {
        document.documentElement.style.setProperty('--color_light', '#ffffff')
        document.documentElement.style.setProperty('--color_light_50', '#ffffff50')
        document.documentElement.style.setProperty('--color_dark', '#000000')
        document.documentElement.style.setProperty('--color_dark_50', '#00000050')
        document.documentElement.style.setProperty('--color_grey', '#888888')
        document.documentElement.style.setProperty('--color_theme', '#8a2be2')
        document.documentElement.style.setProperty('--color_theme_50', '#8a2be250')

        document.getElementById('switchBtn').style.left = `2px`

        document.querySelector('#header_dropdown > div:nth-of-type(1) i[class*="sun"]').style.scale = `1.5`
        document.querySelector('#header_dropdown > div:nth-of-type(1) i[class*="moon"]').style.scale = `1.0`

        isLight = true
    } else {
        document.documentElement.style.setProperty('--color_light', '#444444')
        document.documentElement.style.setProperty('--color_light_50', '#44444450')
        document.documentElement.style.setProperty('--color_dark', '#bcbcbc')
        document.documentElement.style.setProperty('--color_dark_50', '#bcbcbc50')
        document.documentElement.style.setProperty('--color_grey', '#555555')
        document.documentElement.style.setProperty('--color_theme', '#af1f3e')
        document.documentElement.style.setProperty('--color_theme_50', '#af1f3e50')

        document.getElementById('switchBtn').style.left = `22px`

        document.querySelector('#header_dropdown > div:nth-of-type(1) i[class*="sun"]').style.scale = `1.0`
        document.querySelector('#header_dropdown > div:nth-of-type(1) i[class*="moon"]').style.scale = `1.5`

        isLight = false
    }
}
const scroll2top = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
const enableMobileNav = () => {
    if(!isMobileNav) {
        
        // document.querySelector('.headerContainer__navbar').classList.add(headerContNav_Mobile)

        document.querySelector('.headerContainer').style.border = `none`
        document.querySelector('.headerContainer').style.margin = `0`
        document.querySelector('.headerContainer').style.width = `50%`

        document.querySelector('.headerContainer__navbar').style.display = `flex`

        document.getElementById('commonOverlay').style.display = `flex`
        
        document.getElementById('mobileBtnClose').style.display = `flex`
        
        isMobileNav = true
    } else {
        document.querySelector('.headerContainer').style.borderBottom = `2px solid var(--color_theme)`
        document.querySelector('.headerContainer').style.borderLeft = `2px solid var(--color_theme)`
        document.querySelector('.headerContainer').style.borderRight = `2px solid var(--color_theme)`
        document.querySelector('.headerContainer').style.margin = `0 auto`
        document.querySelector('.headerContainer').style.width = `min(1160px, 98%)`

        document.querySelector('.headerContainer__navbar').style.display = `none`

        document.getElementById('commonOverlay').style.display = `none`

        document.getElementById('mobileBtnClose').style.display = `none`

        isMobileNav = false
    }
}
