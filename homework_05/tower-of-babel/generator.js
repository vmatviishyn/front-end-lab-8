const max = process.argv[2];
let FizzBuzz = function*() {
    let element = 1;
    while (element <= max) {
        let value = element;
        if (value % 15 === 0) value = "FizzBuzz";
        else if (value % 3 === 0) value = "Fizz";
        else if (value % 5 === 0) value = "Buzz";
        element++;
        yield value;
    }
}();

for (var n of FizzBuzz) {
    console.log(n);
}