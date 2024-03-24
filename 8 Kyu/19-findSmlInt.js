// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//         let sum = Math.min.apply(Math, args);
//         return sum
//     }
// }

class SmallestIntegerFinder {
    findSmallestInt = args => Math.min(...args) 
}