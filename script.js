const menuBar = document.getElementById('menu-bars')
const overlay = document.getElementById('overlay')
const nav1 = document.getElementById('nav1')
const nav2 = document.getElementById('nav2')
const nav3 = document.getElementById('nav3')
const nav4 = document.getElementById('nav4')
const nav5 = document.getElementById('nav5')

const navArr = [nav1, nav2, nav3, nav4, nav5]

function newAnimation(direction1, direction2) {
    navArr.forEach((nav, i) => {
        nav.classList.replace(`slide-${direction1}-${i + 1}`, `slide-${direction2}-${i + 1}`)
    })
}

function toggleNav() {
    menuBar.classList.toggle('change')
    overlay.classList.toggle('overlay-active')
    if (overlay.classList.contains('overlay-active')) {
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right')
        newAnimation('out', 'in')
    } else {
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left')
        newAnimation('in', 'out')
    }
}

menuBar.addEventListener('click', toggleNav)
navArr.forEach(nav => {
    nav.addEventListener('click', toggleNav)
})