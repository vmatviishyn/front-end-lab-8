export default () => {
    let root = document.getElementsByClassName('calculator')[0];

    let inputs = document.createElement('div');
    inputs.className = "calculator--inputs";
    let number1 = document.createElement('input');
    number1.id = "number1";
    let number2 = document.createElement('input');
    number2.id = "number2";

    inputs.appendChild(number1);
    inputs.appendChild(number2);
    root.appendChild(inputs);

    let text = document.createElement('h4');
    text.id = "result";
    root.appendChild(text);

    let buttons = document.createElement('div');
    buttons.className = "calculator--buttons";

    let addBtn = document.createElement('input');
    addBtn.type = "button";
    addBtn.value = "+";
    addBtn.id = "add"

    let subtract = document.createElement('input');
    subtract.type = "button";
    subtract.value = "-";
    subtract.id = "subtract";

    let multiply = document.createElement('input');
    multiply.type = "button";
    multiply.value = "*";
    multiply.id = "multiply";

    let divide = document.createElement('input');
    divide.type = "button";
    divide.value = "/";
    divide.id = "divide";

    let percent = document.createElement('input');
    percent.type = "button";
    percent.value = "%";
    percent.id = "percent";

    let radical = document.createElement('input');
    radical.type = "button";
    radical.value = "√";
    radical.id = "radical";

    buttons.appendChild(addBtn);
    buttons.appendChild(subtract);
    buttons.appendChild(multiply);
    buttons.appendChild(divide);
    buttons.appendChild(percent);
    buttons.appendChild(radical);

    root.appendChild(buttons);
}

