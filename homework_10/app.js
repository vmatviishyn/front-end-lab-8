class Input {
    constructor(placeHolder) {
        this.placeHolder = placeHolder || "Type...";
        this._value = "";
    }

    get value() {
        return this._value;
    }

    setValue(newValue) {
        this._value = newValue;
    }
}

class NumberInput extends Input {
    constructor(placeHolder) {
        super(placeHolder);
        this.type = "number";
    }
}

let numberInput = new NumberInput("Type numbers...");

class AddValidation {
    constructor(input) {
        this.input = input;
        this.valid = this.input.value == "" ? false : true;
    }
    get value() {
        return this.input.value;
    }
    setValue(newValue) {
        this.input.setValue(newValue);
    }
}

class AddRequiredValidation extends AddValidation {
    constructor(input) {
        super(input);
        this.valid = !this.value == "" ? true : false;
    }

    setValue(newValue) {
        super.setValue(newValue);
        if (!this.value == "") {
            this.valid = true;
        }else {
            this.valid = false;
        }
    }
}

class AddNumberValidation extends AddValidation {
    constructor(input) {
        super(input);
        this.valid = typeof this.value === "number" ? true : false;
    }

    setValue(newValue) {
        super.setValue(newValue);
        if (typeof this.value === "number") {
            this.valid = true;
        }else {
            this.valid = false;
        }
    }
}

class AddMaxLengthValidation extends AddValidation {
    constructor(input, maxLength) {
        super(input);
        this.maxLength = maxLength;
        this.valid = Math.floor(Math.log(this.value) / Math.LN10 + 1) > this.maxLength ? false : true;
    }

    setValue(newValue) {
        super.setValue(newValue);
        let numberOfDigits = Math.floor(Math.log(this.value) / Math.LN10 + 1);
        if (numberOfDigits >= this.maxLength) {
            this.valid = false;
        }
    }
}

numberInput = new AddRequiredValidation(numberInput);
numberInput = new AddNumberValidation(numberInput);
numberInput = new AddMaxLengthValidation(numberInput, 10);


console.log(numberInput.valid); 
numberInput.setValue("1");
console.log(numberInput.valid); 
numberInput.setValue(1);
console.log(numberInput.valid); 
numberInput.setValue(1111111111111111111111111);
console.log(numberInput.valid);