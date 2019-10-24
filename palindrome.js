// A palindrome is a word that reads the same backwards and forwards
// e.g. palindrome('racecar') === true
// e.g. palindrome('table') === false

str = 'racecar'

const palindrome = str => {
    // turn the string to lower case
    str = str.toLowerCase()
    // reverse input string and return the result of the comparison
    return str === str.split('').reverse().join('')
}

console.log(palindrome(str))

