// ClassExample
// For memorization purposes, this code is a great example of class
// and class properties.....

class Monster {
    constructor(name, home ,description) {
        this.name = name;
        this.home = home;
        this.description = description
    }
}

function main(input) {
    var monster = new Monster(input[0], input[1], input[2])
    
    // Print array
    console.log(monster)

    // Print each of it's elements on a new line
    for (let property in monster) {
        console.log(property + ": " + monster[property])
    }
}