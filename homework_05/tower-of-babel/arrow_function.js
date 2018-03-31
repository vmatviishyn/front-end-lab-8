var inputs = process.argv.slice(2);
var result = inputs.map((arr) => arr[0])
    .reduce((str, arr) => str += arr[0]);
console.log(result);