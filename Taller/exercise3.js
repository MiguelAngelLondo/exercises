function divise(number1, number2) {
    let diviser = number1 / number2;
    let module = number1 % number2;

    if (module == 0) {
        return "Entrance: " + number1 + ' and ' + number2 + ' Departure: Division ' + diviser + ' There Have not residue';
    } else {
        return "Entrance: " + number1 + ' and ' + number2 + ' Departure: Division ' + diviser + ' spare ' + module;
    }
}

let number1 = 12;
let number2 = 5;

let result = divise(number1, number2);
let roundedDiviser = Math.round(number1 / number2);
console.log("Entrance: " + number1 + ' and ' + number2 + ' Departure: Division ' + roundedDiviser + ' spare ' + (number1 % number2));