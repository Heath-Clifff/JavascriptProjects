const boxes = document.querySelectorAll('.box')
const movesNum = document.getElementById('moves')
const button = document.getElementById('btn')

isFlipped = false
let firstCard
let secondCard
let numberOfMoves = 0

boxes.forEach(box => {
    box.style.order = Math.floor(Math.random() * 12)
})

boxes.forEach((box, idx) => {
    box.addEventListener('click', flipCard)

})

function flipCard() {
    if (!this.classList.contains('flip')) {
        numberOfMoves++
        movesNum.innerText = numberOfMoves
    }
    this.classList.add('flip')

    if (!isFlipped) {
        firstCard = this
        isFlipped = true
    } else {
        secondCard = this
        isFlipped = false

        if (firstCard.dataset.number == secondCard.dataset.number) {
            firstCard.removeEventListener('click', flipCard)
            secondCard.removeEventListener('click', flipCard)
        } else {
            setTimeout(removeClasses, 450)
        }
    }

}


function removeClasses() {
    firstCard.classList.remove('flip')
    secondCard.classList.remove('flip')
}


button.addEventListener('click', restart)

function restart() {
    numberOfMoves = 0
    movesNum.innerText = numberOfMoves

    boxes.forEach(box => {
        box.classList.remove('flip')
        box.addEventListener('click', flipCard)
    })
}