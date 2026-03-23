let orangegreen = localStorage.getItem('orangegreen')
let blackwhite = localStorage.getItem('blackwhite')
let pinkblack = localStorage.getItem('pinkblack')

const themeSwitch = document.getElementById('theme-switch')

const enableOrangeGreen = () => {
    document.body.classList.add('orangegreen')
    localStorage.setItem('orangegreen' , 'active')
}

const disableOrangeGreen = () => {
    document.body.classList.remove('orangegreen')
    localStorage.setItem('orangegreen' , null)
}

const enableBlackWhite = () => {
    document.body.classList.add('blackwhite')
    localStorage.setItem('blackwhite' , 'active')
}

const disableBlackWhite = () => {
    document.body.classList.remove('blackwhite')
    localStorage.setItem('blackwhite' , null)
}

const enablePinkBlack = () => {
    document.body.classList.add('pinkblack')
    localStorage.setItem('pinkblack' , 'active')
}

const disablePinkBlack = () => {
    document.body.classList.remove('pinkblack')
    localStorage.setItem('pinkblack' , null)
}

if(orangegreen === "active") enableOrangeGreen()

if(blackwhite === "active") enableBlackWhite()

if(pinkblack === "active") enablePinkBlack()

themeSwitch.addEventListener("click", () => {
    orangegreen = localStorage.getItem('orangegreen')
    blackwhite = localStorage.getItem('blackwhite')
    pinkblack = localStorage.getItem('pinkblack')

    if(orangegreen === "active") {
        disableOrangeGreen()
        enableBlackWhite() /* Disable current color, enable the next color in the if block */
    }
    else if (blackwhite === "active"){
        disableBlackWhite()
        enablePinkBlack()
    }
    else if (pinkblack === "active"){
        disablePinkBlack()
    }
    else {
        enableOrangeGreen()
    }
    
})