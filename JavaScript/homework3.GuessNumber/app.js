

let inputGuessNumber, displayInputGuessResult, randomNumbersString, guessResult
let randomNumbersArray, guessNumberArray = []

// startBtnEvent()





window.onload = function () {

    let gameOperateBtn = document.querySelectorAll('.game-operate-btn')

    // console.log(gameOperateBtn)


    let displayResult = document.querySelector('.display-result')
    let checkBtn = document.querySelector('.check-btn')
    initGame()
    // let randomNumber = Math.floor(Math.random() * 10)
    // randomNumbersArray.push(randomNumber)
    gameOperateBtn[0].addEventListener('click', () => {
        startBtnEvent()
    })

    gameOperateBtn[1].addEventListener('click', () => {
        initGame()
    })

    gameOperateBtn[2].addEventListener('click', () => {
        answerBtn()
    })

    gameOperateBtn[3].addEventListener('click', () => {
        checkGuessNumberResult()
    })

}


function startBtnEvent() {

    // getRandomGroup()
    randomNumbersArray = []

    do {
        let randomNumber = Math.floor(Math.random() * 10)
        if (randomNumbersArray.includes(randomNumber)) {
            continue
        }
        else {
            randomNumbersArray.push(randomNumber.toString())
        }

    } while (randomNumbersArray.length < 4)

    gameStart()

    // randomNumbersArray.forEach((i) => {
    //     console.log(i)
    // })
}






function initGame() {
    let gameOperateBtn = document.querySelectorAll('.game-operate-btn:not(.start-btn)')
    gameOperateBtn.forEach(btn => {
        btn.disabled = true
    })
    gameOperateBtn[2].classList.remove('blue')


    let startBtn = document.querySelector('.start-btn')
    startBtn.disabled = false
    startBtn.classList.add('green')


}

function gameStart() {
    let startBtn = document.querySelector('.start-btn')
    startBtn.disabled = true
    startBtn.classList.remove('green')

    let gameOperateBtn = document.querySelectorAll('.game-operate-btn:not(.start-btn)')
    gameOperateBtn.forEach(btn => {
        btn.disabled = false
    })

    gameOperateBtn[2].classList.add('blue')

}


function answerBtn() {
    randomNumbersString = ""
    randomNumbersArray.forEach(number => {
        randomNumbersString += number
    })

    alert(randomNumbersString)
    initGame()
}

function checkGuessNumberResult() {

    let displayInputGuessResult = document.querySelector('.display-result')

    let inputGuessNumber = document.querySelector('.input-guess-number ')
    let guessNumberArray = inputGuessNumber.value.split('');

    // let isNumber = guessNumberArray.every(i => number(i))
    // console.log(isNumber)

    if (guessNumberArray.length == 4) {
        let intersect = randomNumbersArray.filter(x => guessNumberArray.includes(x))
        let a = intersect.filter(x => guessNumberArray.indexOf(x) == randomNumbersArray.indexOf(x)).length

        let b = intersect.length - a


        let newRow = document.createElement('div')
        newRow.classList.add('new-row', 'border', 'border-light', 'rounded')
        let newGuessResult = document.createElement('div')
        newGuessResult.classList.add('new-guess-result', 'badge', 'text-bg-primary')
        let newGuessNumber = document.createElement('div')
        newGuessNumber.classList.add('new-guess-number')

        newGuessResult.innerText = `${a}A${b}B`
        newGuessNumber.innerText = inputGuessNumber.value

        newRow.appendChild(newGuessResult)
        newRow.appendChild(newGuessNumber)

        displayInputGuessResult.appendChild(newRow)

        if (a == 4) {
            alert('恭喜過關')
            initGame()
        }
        console.log(randomNumbersArray)
        console.log(guessNumberArray)

    } else {
        alert('input error')

    }





}

