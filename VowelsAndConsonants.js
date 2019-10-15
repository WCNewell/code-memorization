// VowelsAndConsonants
// First print all the vowels in a string
// Then print all of the consonants in a string

let string = 'javascriptloops'

// function vowelsAndConsonants(string) {
//     let vowels = 'aeiou'
//     let consonants = ''

//     for (i = 0; i < string.length; i++) {
//         if (vowels.includes(string[i])) {
//             console.log(string[i])
//         } else {
//             consonants += string[i] + '\n'
//         }
//     }
//     console.log(consonants)
// }

// console.log(vowelsAndConsonants(string))

// function vowelsAndConsonants(s) {
//     let vowels = 'aeiou'
//     let consonants = ''

//     for (i = 0; i < string.length; i++) {
//         if (vowels.includes(string[i])) {
//             console.log(string[i])
//         } else {
//             consonants += string[i] + '\n'
//         }
//     }
//     console.log(consonants)
// }

// console.log(vowelsAndConsonants(string))

// function vowelsAndConsonants(string) {
//     let vowels = 'aeiou'
//     let consonants = ''

//     for (i = 0; i < string.length; i++) {
//         if (vowels.includes(string[i])) {
//             console.log(string[i])
//         } else {
//             consonants += string[i]
//         }
//         console.log()
//     }
// }

// console.log(vowelsAndConsonants(string))

// ^^ The above is not quite working here is another solution:

function vowelsAndConsonants(string) {
    let vowels = 'aeiou'
    let consonants = ''

    for (i = 0; i < string.length; i++) {

            if (vowels.includes(string[i])) {
            console.log(string[i])

        } else {
            consonants += string[i]
        }

    }

    console.log(consonants.trim())
}

console.log(vowelsAndConsonants(string))

