function plus(number1, number2) {
    if (isNaN(number1) || isNaN(number2)) {
        return "Error! One of the character is not a number."
    }
    return (number1 + number2)
}

function remainder(number1, number2) {
    if (isNaN(number1) || isNaN(number2)) {
        return "Error! One of the character is not a number."
    }
    return (number1 - number2)
}

function multiply(number1, number2) {
    if (isNaN(number1) || isNaN(number2)) {
        return "Error! One of the character is not a number."
    }
    return (number1 * number2)
}

function divide(number1, number2) {
    if (isNaN(number1) || isNaN(number2)) {
        return "Error! One of the character is not a number."
    }
    if (number2 === 0) {
        return "Error! Division with zero?."
    }
    return (number1 / number2)
}

console.log(plus(2, 4))
console.log(remainder(2, 4))
console.log(multiply(2, 4))
console.log(divide(2, 4))