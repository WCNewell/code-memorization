// RemoveDoubles
// Write a function that removes duplicate characters from a string

let string = 'anaconda'

function removeDoubles(string) {
    let mapping = {}
    let newString = ''

    for (i = 0; i < string.length; i++) {
        if (!(string[i] in mapping)) {
            newString += string[i]
            mapping[string[i]] = true
        }
    }
    return newString
}

console.log(removeDoubles(string))

function removeDoubles(string) {
    let mapping = {}
    let newString = ''

    for (i = 0; i < string.length; i++) {
        if(!(string[i] in mapping)) {
            newString += string[i]
            mapping[string[i]] = true
        }
    }
    return newString
}

console.log(removeDoubles(string))

function removeDoubles(string) {
    let mapping = {}
    let newString = ''
    
    for (i = 0; i < string.length; i++ ) {
        if(!(string[i] in mapping)) {
            newString += string[i]
            mapping[string[i]] = true
        }
    }
    return newString
}

console.log(removeDoubles(string))