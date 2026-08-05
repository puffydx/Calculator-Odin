const numbersz = document.getElementById("numbers");
const operatorsz = document.getElementById("operators");
const miscz = document.getElementById("misc");
const displayz = document.getElementById("display")

let firstNumber = "";
let operator = "";
let lastNumber = "";
let currentInput = ""
let storedValue = ""
let activeOperator = ""
let shouldResetInput = false;


function operate(firstNumber, operator, lastNumber) {
    const num1 = Number(firstNumber)
    const num2 = Number(lastNumber)

    if (operator === "+") {
        return num1 + num2;
    }
    else if (operator === "-") { 
        return num1 - num2;
     }
    else if (operator === "*") { 
        return num1 * num2; 
    }
    else if (operator === "/") { 
    if (num2 === 0) return "Error: Can't do that!";
    return num1 / num2; 
}



}

numbersz.addEventListener ("click", function(e) {

        if (shouldResetInput === true) {
        currentInput = "";
        shouldResetInput = false;
    }

    if (e.target.tagName === 'BUTTON') {
        currentInput += e.target.textContent;
        displayz.textContent = currentInput;
    }
});

operatorsz.addEventListener ("click", function(e) {

    if (e.target.tagName === 'BUTTON') {

    if (e.target.textContent.trim() === '=') {

        let results = operate(storedValue, activeOperator, currentInput);
        if (!isNaN(results) && results % 1 !== 0) {
         results = results.toFixed(4);
}
        displayz.textContent = results
        currentInput = results

    shouldResetInput = true;
    }

    else {
        storedValue = currentInput;
        activeOperator = e.target.textContent;
        displayz.textContent = activeOperator;
        currentInput =""

    }};

});

miscz.addEventListener ("click", function(e) {

        if (e.target.tagName === 'BUTTON') {
        currentInput = "";
        storedValue = "";
        activeOperator = "";
        shouldResetInput = false;
        displayz.textContent = "0";
    }
    

});