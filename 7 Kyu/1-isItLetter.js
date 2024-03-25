// function isItLetter(character) {
//     if (character.match(/[a-z]/i)) {
//         character = true
//     } else {
//         character = false
//     }

//     return character
// }

isItLetter = character => character.match(/[a-z]/i) ? true : false

console.log(isItLetter('a'))