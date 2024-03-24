// const makeNegative = (num) => -Math.abs(num)

function makeNegative(num) {
    if (num === 0) {
        return num
    } else if(num < 0) {
        return num
    } else if(num *= -1) {
        return num
    }
}


console.log(makeNegative(0));