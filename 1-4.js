let number = Number(prompt("Please enter a number"))
function isPrimeNumber(number) {
    if (number == 1) {
        return false
    }

    for (let i = 2; i < number; i++) {
        if (number % i == 0) return false
    }
    return true
}


function primeNumber(number) {
    for (let j = 1; j <= number; j++) {
        if (isPrimeNumber(j)) {
            console.log(j)
        }
    }
}
primeNumber(number)