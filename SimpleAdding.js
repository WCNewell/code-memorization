// Simple Adding
// Add all numbers from 1 to num

let num = 24

function simpleAdding(num) { 

    let sum = 0;
    for (i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;

}

console.log(simpleAdding(num))

// or

function simpleAdding(num) { 
  if (num === 1) {
    return 1;
  }
  else {
    return num + simpleAdding(num -1);
  }
}

console.log(simpleAdding(num))