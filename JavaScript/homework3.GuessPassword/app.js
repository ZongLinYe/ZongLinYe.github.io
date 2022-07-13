
let guessSmallNumber, guessLargeNumber, randomNumber, oneBtn, twoBtn, threeBtn, fourBtn, fiveBtn, sixBtn, sevenBtn, eightBtn, nineBtn, zeroBtn, startBtn, clearBtn

window.onload = function () {


    let displayResult = document.querySelector('.display-result')
    guessSmallNumber = 0
    guessLargeNumber = 100
    // displayResult.classList.add()
    console.dir(displayResult)
    displayResult.innerText = `${guessSmallNumber}-${guessLargeNumber}`
    console.log(displayResult.innerText)


    let productRandomNumber = document.querySelector('.product-random-number')
    productRandomNumberBtn(productRandomNumber)
    productRandomNumber.addEventListener('click', () => { productRandomNumberEvent(productRandomNumber) })
    console.dir(productRandomNumber)
    // productRandomNumber.children
    // let btn = document.createElement('button')
    // btn.innerText = '產生數字'
    // productRandomNumber.appendChild(btn)

    let inputGuessNumber = document.querySelector('.input-guess-number')

    inputGuessNumberGroup(inputGuessNumber)
}

function productRandomNumberBtn(productRandomNumber) {
    let btn = document.createElement('button')
    btn.setAttribute('type', 'button')
    btn.classList.add('btn', 'btn-primary', 'product-random-number-btn')
    btn.innerText = '產生數字'
    productRandomNumber.appendChild(btn)
}

function productRandomNumberEvent(productRandomNumber) {
    randomNumber = Math.floor(Math.random() * 99) + 1
    // console.log(randomNumber)
    productRandomNumber.children[0].disabled = true
    let numberBtn = document.querySelectorAll('.number-btn')


    numberBtn.forEach((btn) => {
        btn.disabled = false
    })
    let startBtn = document.querySelector('.start-btn')
    startBtn.disabled = false


}

function inputGuessNumberGroup(inputGuessNumber) {
    let label = document.createElement('label')
    let input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.classList.add('mb-3', 'input-guess-number-text')

    label.appendChild(input)
    let numberBtnGroup = document.createElement('div')
    numberBtnGroup.classList.add('number-btn-group')

    for (i = 0; i < 10; i++) {
        let numberBtn = document.createElement('button')
        numberBtn.classList.add(`number-btn-${i}`, 'number-btn', 'col-4', 'border-light', 'border', 'border-4')
        numberBtn.innerText = i

        numberBtn.setAttribute('value', `${i}`)
        numberBtn.addEventListener('click', () => {
            inputGuessNumberEvent(numberBtn, input)
        })
        numberBtn.disabled = true
        numberBtnGroup.appendChild(numberBtn)
        label.appendChild(numberBtnGroup)
    }

    let startBtn = document.createElement('button')
    startBtn.classList.add('start-btn', 'col-4', 'border-light', 'border', 'border-4', 'function-btn')
    startBtn.innerText = "√"
    startBtn.addEventListener('click', () => {
        startBtnEvent(startBtn)
    })

    startBtn.disabled = true
    numberBtnGroup.appendChild(startBtn)
    label.appendChild(numberBtnGroup)



    let clearBtn = document.createElement('button')
    clearBtn.classList.add('clear-btn', 'col-4', 'border-light', 'border', 'border-4', 'function-btn')
    clearBtn.innerText = "X"
    clearBtn.addEventListener('click', () => {
        clearBtnEvent(clearBtn)
    })
    numberBtnGroup.appendChild(clearBtn)
    label.appendChild(numberBtnGroup)


    inputGuessNumber.appendChild(label)
}


function inputGuessNumberEvent(numberBtn, input) {
    // console.log(numberBtn.getAttribute('value'))
    input.value += numberBtn.getAttribute('value')
}

function startBtnEvent(startBtn) {
    let inputValue = document.querySelector('.input-guess-number-text')

    // console.dir(inputValue)
    let displayResult = document.querySelector('.display-result')

    if (guessSmallNumber < inputValue.value && inputValue.value < guessLargeNumber) {
        if (inputValue.value > randomNumber) {
            guessLargeNumber = inputValue.value
            displayResult.innerText = `${guessSmallNumber}-${guessLargeNumber}`

        } else if (inputValue.value < randomNumber) {
            guessSmallNumber = inputValue.value
            displayResult.innerText = `${guessSmallNumber}-${guessLargeNumber}`
        } else {
            initGame()

            alert('恭喜答對了')
        }

    } else {
        initGame()
        alert("input error")

    }

    inputValue.value = ""





}

function clearBtnEvent(clearBtn) {

    let inputGuessNumber = document.querySelector('.input-guess-number-text')
    inputGuessNumber.value = ''

}


function initGame() {
    let displayResult = document.querySelector('.display-result')

    guessSmallNumber = 0
    guessLargeNumber = 100
    displayResult.innerText = `${guessSmallNumber}-${guessLargeNumber}`

    let numberBtn = document.querySelectorAll('.number-btn')
    numberBtn.forEach(btn => {
        btn.disabled = true
    })
    startBtn = document.querySelector('.start-btn')
    startBtn.disabled = true
    let randomNumberBtn = document.querySelector('.product-random-number-btn')

    randomNumberBtn.disabled = false
}