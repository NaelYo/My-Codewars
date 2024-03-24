// function squareSum(numbers){
//     let sum = 0
//     for(let i = 0 ; i < numbers.length; i++){
//       sum += (numbers[i] * numbers[i])    
//     } 
//     return sum
//   }

const squareSum = (numbers) => numbers.reduce((acc, el) => acc + Math.pow(el, 2))

console.log(squareSum([1, 2]));