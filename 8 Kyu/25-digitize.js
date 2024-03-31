function digitize(n) {
    let sum = String(n).split('').reverse().map(Number);

    return sum
}

console.log(digitize(35231));