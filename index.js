function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function increment(n){
    return n+= 1;
}

function decrement(n){
    return n-= 1;
}

function makeInt(string){
    let parsed = parseInt(string, 10);
    return parsed;
}

function preserveDecimal(string){
    let parse = parseFloat(string);
    return parse;
}