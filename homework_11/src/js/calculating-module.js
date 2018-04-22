let add = (number1, number2) => {
    return number1 + number2;
}

let subtract = (number1, number2) => {
    return number1 - number2;
}

let multiply = (number1, number2) => {
    return number1 * number2;
}

let divide = (number1, number2) => {
    return number1 / number2;
}

let percent = (number1, number2) => {
    return Math.floor((number1 / number2) * 100);
}

let radical = (number) => {
    return Math.sqrt(number);
}

export default {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    percent: percent,
    radical: radical
}