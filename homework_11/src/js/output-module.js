import calc from './calculating-module';
import render from './interface-module';
import '../styles/styles.css';

render();

let output = document.getElementById('result');
let number1 = document.getElementById('number1');
let number2 = document.getElementById('number2');

let addBtn = document.getElementById('add');
let subtractBtn = document.getElementById('subtract');
let multiply = document.getElementById('multiply');
let divide = document.getElementById('divide');
let percent = document.getElementById('percent');
let radical = document.getElementById('radical');

addBtn.addEventListener("click", ()=>{
    output.innerHTML = calc.add(+number1.value, +number2.value);
});

subtractBtn.addEventListener("click", ()=>{
    output.innerHTML = calc.subtract(+number1.value, +number2.value);
});

multiply.addEventListener("click", ()=>{
    output.innerHTML = calc.multiply(+number1.value, +number2.value);
});

divide.addEventListener("click", ()=>{
    output.innerHTML = calc.divide(+number1.value, +number2.value);
});

percent.addEventListener("click", ()=>{
    output.innerHTML = calc.percent(+number1.value, +number2.value);
});

radical.addEventListener("click", ()=>{
    output.innerHTML = calc.radical(+number1.value);
});

