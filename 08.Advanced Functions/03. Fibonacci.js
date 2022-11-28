function getFibonator() {

    let previous = 0;
    let current = 1; 


    return function () {
        const next = previous + current;
        previous = current;
        current = next; 
        
        return previous;
    }
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13


