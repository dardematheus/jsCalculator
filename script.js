let inputArray = [];
let displayValue = '';

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