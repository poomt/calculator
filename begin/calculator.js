let screenValue = "0"
let buffer = "0"
let screen;
let previousOperations = ''
let previousResult = 0

function init() {
    screen = document.querySelector(".screen")
    const calcButtons = document.querySelector(".calc-buttons")
    calcButtons.addEventListener('click', handleBUttonClick)

}

function handleBUttonClick(event) {
    const input = event.target.innerText
    if (isButtonANumber(input)) {

        if (buffer === '0') {
            buffer = input
            screenValue = buffer
        } else {
            buffer = buffer + input
            screenValue = buffer
        }

    } else {
        switch (input) {
            case 'C':
                console.log("c button clikced");
                buffer = "0"
                screenValue = buffer
                break;
            case '←':
                if (buffer.length === 1) {
                    buffer = "0"
                    screenValue = buffer
                } else {
                    buffer = buffer.substring(0, screenValue.length - 1)
                    screenValue = buffer
                }
                break;
            case '+':
            case '−':
            case '×':
            case '÷':
                handleOperation(input)
                break;
        }
    }
    screen.innerText = screenValue

}

function handleOperation(input) {
    if (previousOperations === '') {
        previousResult = parseFloat(screenValue)
    } else {
        console.log(previousResult, screenValue)
        previousResult = calculate(previousOperations, previousResult, parseFloat(screenValue))
        buffer = previousResult
        screenValue = buffer
    }
    buffer = "0"
    previousOperations = input
}

function calculate(operator, a, b) {
    switch (operator) {
        case '+': return a + b;
        case '−': return a - b;
        case '×': return a * b;
        case '÷': return a / b;
    }
    return a + b
}

function isButtonANumber(input) {
    return !isNaN(parseFloat(input))
}



init()