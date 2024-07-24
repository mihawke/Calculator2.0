document.addEventListener("DOMContentLoaded", () => {
    firstInputDiv.textContent = firstInput
    secondInputDiv.textContent = secondInput
    resultDiv.textContent = result;
})

//get first number
let firstInput = "";
// let firstInput = parseFloat(prompt("enter firstNumber"))
const firstInputDiv = document.getElementById("firstInput")

//get second number
let secondInput = "";
// let secondInput = parseFloat(prompt("enter second input"))
const secondInputDiv = document.getElementById("secondInput")


//get numbers via buttons
const buttons = document.querySelectorAll(".numBtn")
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        if (operator == "") {
            firstInput += btn.innerHTML
            firstInputDiv.textContent = firstInput
        }
        else {
            secondInput += btn.innerHTML
            secondInputDiv.textContent = secondInput
        }
    })
})

//getting operator
let operator = "";
const operators = document.querySelectorAll(".operatorBtn")
const operatorDiv = document.getElementById("operator")
operators.forEach(btn => {
    btn.addEventListener("click", getOperator)
})

//funtction to get operator
function getOperator(event) {
    operator = event.target.innerHTML
    operatorDiv.textContent = operator
    if (result == 0 && secondInput != 0) {
        firstInput = operate(parseFloat(firstInput), parseFloat(secondInput), operator)
        firstInputDiv.textContent = firstInput
        secondInput = ""
        secondInputDiv.textContent = secondInput
    }
    else if (result != 0) {
        firstInput = result
        firstInputDiv.textContent = firstInput
        secondInput = ""
        secondInputDiv.textContent = secondInput
        result = ""
        resultDiv.textContent = result;
    }
}

//addition functio
function add(first, second) {
    return first + second;
}

//substraction function
function substract(first, second) {
    return first - second;
}

//multiplication function
function multiply(first, second) {
    return first * second;
}

//division function
function divide(first, second) {
    return first / second;
}

//funtion to run the operation
function operate(first, second, operator) {
    switch (operator) {
        case "+":
            return add(first, second);
            break;
        case "-":
            return substract(first, second)
            break;
        case "/":
            return divide(first, second)
            break;
        case "*":
            return multiply(first, second)
            break;
        default:
            break;
    }
}

let result = "";
const resultDiv = document.getElementById("result")

const evaluate = document.getElementById("evaluate")
evaluate.addEventListener("click", () => {
    //get result
    result = operate(parseFloat(firstInput), parseFloat(secondInput), operator)
    resultDiv.textContent = result;
    firstInput = result;
    firstInputDiv.textContent = firstInput;
    operator = "";
    operatorDiv.textContent = operator;
    secondInput = "";
    secondInputDiv.textContent = secondInput;
})

const deleteBtn = document.getElementById("delete")
deleteBtn.addEventListener("click", () => {
    result = "";
    firstInput = "";
    secondInput = "";
    operator = "";
    firstInputDiv.textContent = firstInput
    operatorDiv.textContent = operator
    secondInputDiv.textContent = secondInput
    resultDiv.textContent = result;
})