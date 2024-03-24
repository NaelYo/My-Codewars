// function boolToWord(bool) {
//     let result = ''
//     if(bool === true) {
//         result = 'Yes'
//     } else if (bool === false) {
//         result = 'No'
//     }

//     return result
// }

const boolToWord = (bool) => bool ? 'Yes' : 'No';

console.log(boolToWord(true));