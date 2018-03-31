function* factorial(n) {
    var result = 1;
    for (i = 1; i <= n; ++i) {
        yield result *= i;
    }
}

for (var n of factorial(5)) {
    console.log(n)
}