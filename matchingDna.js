// Given a DNA strand, create it's matching strand:

// My first attempt...returned matchingDna.push is not a function...

function DNAStrand(dna) {
    matchingDna = ''
    for (i = 0; i < dna.length; i++) {
        if (dna[i] === 'A') {
            return matchingDna.push('T')
        } else if (dna[i] === 'A') {
            return matchingDna.push('A')
        } else if (dna[i] === 'C') {
            return matchingDna.push('G')
        } else return matchingDna.push('C')
    }
    return matchingDna
}

// A kata solution:

function DNAStrand(dna) {
    //your code here
    var result = "";
    for (var i = 0; i < dna.length; i++) {
        if (dna[i] === "A") {
            result += "T";
        }
        else if (dna[i] === "T") {
            result += "A";
        }
        else if (dna[i] === "C") {
            result += "G";
        }
        else if (dna[i] === "G") {
            result += "C";
        }
        else {
            result += dna[i];
        }
    }
    return result;
}

// Another kata solution:

var pairs = { 'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C' };

function DNAStrand(dna) {
    return dna.split('').map(function (v) { return pairs[v] }).join('');
}
