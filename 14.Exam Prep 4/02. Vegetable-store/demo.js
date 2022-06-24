function solve(input) {
 

    let a = input[0];

    let b = input[2]

    let result = a + b;

    // if (result < 10) {
    //     console.log(`Result of ${a} + ${b} is less than 10`)
    // } else if (result >= 10 && result < 20) {
    //     console.log("")
    // }

    //console.log(input.length)

    for (let i = 0; i < input.length; i++) {
        console.log(input[i])
    }

}      
solve([7, 6, 5, 4, 3, 2, 1])