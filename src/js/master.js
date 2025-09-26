let box = document.getElementById('box')
let firstMove = false
let Char = ""
let nextChar = ""
let d = document.querySelectorAll('#box > div')
let p = document.querySelectorAll('#box > div > p')
let x = 0
d.forEach((val, index, arr) => {
    let Pi = p[index]

    // --------------------------style--------------------------
    Pi.style.width = 'fit-content'
    Pi.style.height = 'fit-content'
    Pi.style.position = 'absolute'
    Pi.style.top = '50%'
    Pi.style.left = '50%'
    Pi.style.transform = 'translate(-50%,-50%)'
    Pi.style.color = 'white'
    Pi.style.fontSize = '60px'
    Pi.style.display = 'none'
    // ---------------------------------------------------------

    val.addEventListener('click', () => {
        if (Pi.innerText !== '') return
        if (!firstMove) {
            Pi.style.display = 'block'
            let rand = Math.floor(Math.random() * 2)
            firstChar = rand == 0 ? 'O' : 'X'
            Pi.innerText = firstChar
            firstMove = true
            Char = firstChar
        } else {
            p[index].style.display = "block"
            nextChar = Char == "O" ? "X" : "O"
            p[index].innerText = nextChar
            Char = nextChar

        }
        if (p[index].innerText == 'O') {
            p[index].style.color = "#c75773"
            p[index].style.textShadow = "0px 0px 20px red"
        } else {
            p[index].style.color = "#55bee8"
            p[index].style.textShadow = "0px 0px 20px #2a7b9b"
        }
        win()
    })
})
// -----------------------------win-----------------------------
lineX1 = document.getElementById('lineX1')
lineX2 = document.getElementById('lineX2')
lineX3 = document.getElementById('lineX3')
lineY1 = document.getElementById('lineY1')
lineY2 = document.getElementById('lineY2')
lineY3 = document.getElementById('lineY3')
lineXY1 = document.getElementById('lineXY1')
lineXY2 = document.getElementById('lineXY2')

function win() {
    let pVal = []

    for (let i = 0; i < p.length; i++) {
        pVal.push(p[i].innerText)
    }

    if (pVal[0] == 'X' && pVal[1] == 'X' && pVal[2] == 'X' || pVal[0] == 'O' && pVal[1] == 'O' && pVal[2] == 'O') {
        lineX1.style.display = 'block'
        setTimeout(() =>
            lineX1.style.width = '310%', 10)
    } else if (pVal[0] == 'X' && pVal[3] == 'X' && pVal[6] == 'X' || pVal[0] == 'O' && pVal[3] == 'O' && pVal[6] == 'O') {
        lineY1.style.display = 'block'
        setTimeout(() =>
            lineY1.style.height = '310%', 10)
    } else if (pVal[1] == 'X' && pVal[4] == 'X' && pVal[7] == 'X' || pVal[1] == 'O' && pVal[4] == 'O' && pVal[7] == 'O') {
        lineY2.style.display = 'block'
        setTimeout(() =>
            lineY2.style.height = '310%', 10)
    } else if (pVal[3] == 'X' && pVal[4] == 'X' && pVal[5] == 'X' || pVal[3] == 'O' && pVal[4] == 'O' && pVal[5] == 'O') {
        lineX2.style.display = 'block'
        setTimeout(() =>
            lineX2.style.width = '310%', 10)
    } else if (pVal[2] == 'X' && pVal[5] == 'X' && pVal[8] == 'X' || pVal[2] == 'O' && pVal[5] == 'O' && pVal[8] == 'O') {
        lineY3.style.display = 'block'
        setTimeout(() =>
            lineY3.style.height = '310%', 10)
    } else if (pVal[6] == 'X' && pVal[7] == 'X' && pVal[8] == 'X' || pVal[6] == 'O' && pVal[7] == 'O' && pVal[8] == 'O') {
        lineX3.style.display = 'block'
        setTimeout(() =>
            lineX3.style.width = '310%', 10)
    } else if (pVal[2] == 'X' && pVal[4] == 'X' && pVal[6] == 'X' || pVal[2] == 'O' && pVal[4] == 'O' && pVal[6] == 'O') {
        lineXY1.style.display = 'block'
        setTimeout(() =>
            lineXY1.style.width = '450%', 10)
    } else if (pVal[0] == 'X' && pVal[4] == 'X' && pVal[8] == 'X' || pVal[0] == 'O' && pVal[4] == 'O' && pVal[8] == 'O') {
        lineXY2.style.display = 'block'
        setTimeout(() =>
            lineXY2.style.width = '450%', 10)
    }
}
// ----------------------restart button------------------------
function restart() {
    let _line = document.querySelectorAll('span')
    for (let i = 0; i < p.length; i++) {
        p[i].innerText = ""
    }
    _line.forEach((val, ind, larr) => {
        val.style.display = 'none'
        larr[0].style.width = '0px'
        larr[1].style.height = '0px'
        larr[2].style.height = '0px'
        larr[3].style.height = '0px'
        larr[4].style.width = '0px'
        larr[5].style.width = '0px'
        larr[6].style.width = '0px'
        larr[7].style.width = '0px'
    })
    firstMove = 'false'
    Char = ''
    nextChar = ''
}
// -------------------------star bg---------------------------
let container = document.getElementById('star')
let containerW = container.offsetWidth
let containerH = container.offsetHeight

function star() {
    let star = document.createElement('div')
    star.classList.add('star')
    star.style.top = Math.random() * containerH + 'px'
    star.style.left = Math.random() * containerW + 'px'
    container.appendChild(star)
}
for (let i = 1; i < 500; i++) {
    star()
}