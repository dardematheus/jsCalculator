let inputArray = [];
let displayValue = '';
let dataArray = []

function inArr(input){
    inputArray.push(input);
    updateDisplay();
}

function updateDisplay(){
    displayValue = inputArray.join('');
    document.getElementById('display').value = displayValue;
}

function clearAll(){
    inputArray = [];
    updateDisplay();
}

function clearInput(){
    inputArray.pop();
    updateDisplay();
}

function calculate(){
    let calcString = inputArray.join('');

    result = eval(calcString);
    dataArray = inputArray;
    inputArray = []
    inputArray.push(result);
    updateDisplay();
}

function restoreArray(){
    clearInput();
    inputArray = dataArray;
    updateDisplay();
}