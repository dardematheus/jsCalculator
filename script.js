let inputArray = [];
let displayValue = '';
let dataArray = [];
let link = document.getElementById('theme');

function inArr(input){
    inputArray.push(input);

    let size = inputArray.length -1;
    let last = inputArray[size];

    if (last == '+' || last == '-' || last == '*' || last == '/'){
        let penult = inputArray[size - 1];
        if (penult == '+' || penult == '-' || penult == '*' || penult == '/'){
            inputArray.pop();
            inputArray.pop();
            inputArray.push(last);
        }
    }



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

    if (calcString == '0/0'){
        inputArray = [];
        inputArray.push('Error');
        updateDisplay();
        return;
    }

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

function darkMode(){
    link.setAttribute("href", "styles2.css");
}

function lightMode(){
    link.setAttribute("href", "styles.css");
}

function colchetes(){
    let pos = inputArray.length -1;
    
    if (inputArray[pos] == '(' || !isNaN(inputArray[pos])){
        inputArray.push(')');
        updateDisplay();
    } 
    else{
        inputArray.push('(');
        updateDisplay();
    }
}

function switchOperation(){
    let calcString = inputArray.join('');
    let num = parseFloat(calcString);

    let troca = num * (-1);
    inputArray = [];
    inputArray.push(troca);
    updateDisplay();   
}