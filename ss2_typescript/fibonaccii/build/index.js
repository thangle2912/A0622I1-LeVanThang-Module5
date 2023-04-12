"use strict";
// // happy coding 👻
// console.log("hello world");
let sum = 0;
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
for (let i = 1; i < 10; i++) {
    console.log(fibonacci(i));
    sum += fibonacci(i);
}
console.log("total = " + sum);
