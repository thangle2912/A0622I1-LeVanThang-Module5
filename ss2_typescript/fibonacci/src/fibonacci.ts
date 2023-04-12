let sum: number = 0;

function fibonacci(n: number) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

for (let i = 1; i < 10; i++) {
    console.log(fibonacci(i));
    sum += fibonacci(i);
}
console.log("total = " + sum);
