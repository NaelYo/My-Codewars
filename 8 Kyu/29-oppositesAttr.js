function lovefunc (flower1, flower2) {
    if (flower1 % 2 === 0 && flower2 % 2 === 1) return true
    if (flower2 % 2 === 0 && flower1 % 2 === 1) return true
    return false
} 


console.log(lovefunc(503, 717));