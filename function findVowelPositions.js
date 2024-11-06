// CodeSignals JavaScript practice
// Write a function that takes a string s, iterates through it,
// and collects all 0-based positions of vowels in it to an array.

// Note that you should not use any JavaScript built-in methods to solve this task.

// For example, console.log(findVowelPositions("Hello WORLD")) should output [1, 4, 7].
// Here, 'e' is a vowel, and its position in the string "Hello" is 1. 'o' is also a vowel,
// and its position is 4. The last vowel is O at position 7. Vowels are defined as any
// of the following characters: ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].

function findVowelPositions(s) {
    // TODO: implement findVowelPositions without using any built-in string methods
    let positions = [];
    for (i=0; i<s.length; i++) {
        if (s[i] === 'a' ||
            s[i] === 'e' ||
            s[i] === 'i' ||
            s[i] === 'o' ||
            s[i] === 'u' ||
            s[i] === 'A' ||
            s[i] === 'E' ||
            s[i] === 'I' ||
            s[i] === 'O' ||
            s[i] === 'U') {
            positions.push(i);
        }
    }
    return positions;
}

module.exports = { findVowelPositions };