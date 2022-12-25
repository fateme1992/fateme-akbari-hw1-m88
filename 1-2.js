var number = Number(prompt("Please enter a number"))
function isPrimeNumber(number) {
    if (number < 1) {
        return console.log("it is Bad Number")
    }
    if (number == 1) {
        return console.log(`${number} is specific number `)
    }
    for (let i = 2; i < number; i++) {
        if (number % i == 0) return console.log(`${number} is not prime number`)
    }
    return console.log(`${number} is prime number`)
}

isPrimeNumber(number)

// return false/true