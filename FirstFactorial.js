// First Factorial:
// Take the num parameter being passed and return the factorial of it

let num = 8

function firstFactorial(num) {

    let factorial = 1;

    for(let i = 1; i <= num; i++) {

        factorial *= i;
    }

    return factorial; 
}

console.log(firstFactorial(num))