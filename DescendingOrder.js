let num = 24145

function descendingOrder(num) {
    return parseInt(String(num).split('').sort((a, b) => { return b - a }).join(''))
}

console.log(descendingOrder(num))