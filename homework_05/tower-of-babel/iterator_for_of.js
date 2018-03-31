const max = process.argv[2];
let FizzBuzz = {
    [Symbol.iterator]() {
        let element = 1;
        return {
            next() {
                if (element > max) {
                    return { done: true };
                }
                let value = element;
                if (value % 3 === 0) value = "Fizz";
                if (value % 5 === 0) value = "Buzz";
                if (value % 15 === 0) value = "FizzBuzz";
                element++;
                return { done: false, value: value };
            }
        }
    }
}

for (var n of FizzBuzz) {
    console.log(n);
}