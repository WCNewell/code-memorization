// An Anagram is a word that has the same letters as another word but arranged in a different order
// e.g. anagram('finder', 'friend') --> true
// e.g. anagram('hello', 'goodbye') --> false

// Make sure letter casing isn't factored into the comparison; just transform both strings into either lower case or upper case.
// Leave everything that isn't a chracter out of the comparison; a good option would be to use a regular exprssion

// Helper function that build the object to store the data

strA = 'friend'
strB = 'finder'

const buildCharObject = str => {
    const charObj = {}
    for (let char of str.replace(/[^\w]/g).toLowerCase()) {

        // if the object already has a key value pair equal to the value being looped over,
        // increase the value by 1, otherwise add the letter being looped over as key and 1 as its value

        charObj[char] = charObj[char] + 1 || 1
    }
    return charObj
}

// Main function

const anagram = (strA, strB) => {
    const charObjA = buildCharObject(strA)
    const charObjB = buildCharObject(strB)

    // Compare number of keys in the two objects (anagrams must have the same number of letters)

    if (Object.keys(charObjA).length !== Object.keys(charObjB).length) {
        return false;
    }

    // If both objects have the same number of keys we can be sure that at least both strings have he same number of characters
    // Now we can compare the two objects to see if both have the same letters in the same amount

    for (let char in charObjA) {
        if (charObjA[char] !== charObjB[char]) {
            return false;
        }
    }
    // If both of the above checks succeed, uyou have an anagram
    return true;
}

console.log(anagram(strA, strB))