// VowelsAndConsonants
// First print all the vowels in a string
// Then print all of the consonants in a string

let string = 'javascriptloops'

function vowelsAndConsonants(s) {
    let vowels = 'aeiou'
    let consonants = ''

    for (i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            console.log(s[i])
        } else {
            consonants += s[i] + '\n'
        }
    }
    console.log(consonants)
}

console.log(vowelsAndConsonants(string))

function vowelsAndConsonants(s) {
    let vowels = 'aeiou'
    let consonants = ''

    for (i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            console.log(s[i])
        } else {
            consonants += s[i] + '\n'
        }
    }
    console.log(consonants)
}

console.log(vowelsAndConsonants(string))