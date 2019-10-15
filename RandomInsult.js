var pickRandomWord = function (words) {
    return words[Math.floor(Math.random() * words.length)]
}

generateRandomInsult = function () {
    var randonBodyParts = ['Face', 'Nose', 'Butt']
    var randomAdjectives = ['smelly', 'boring', 'stupid']
    var randomAnimals = ['Cat', 'Monkey', 'Donkey', 'Dog']

    var randomString = 'Your ' + pickRandomWord(randonBodyParts) +
        ' is like a ' + pickRandomWord(randomAdjectives) +
        ' ' + pickRandomWord(randomAnimals) + '!!!'

    return randomString
}

console.log(generateRandomInsult())
