var number = Number(prompt("please add number"))
console.log(number);
function oddOrEven(number) {
    if (number % 2 !== 0) {
        return console.log("number is ODD")
    }
    return console.log(`${number} is EVEN`)
}
oddOrEven(number)

// If NaN