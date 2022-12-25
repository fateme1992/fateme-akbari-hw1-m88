let number = Number(prompt("Please enter a number"))
console.log(number);
function reverse(number) {
    var reverseNumber = 0
    while (number > 0) {
        reverseNumber = reverseNumber * 10 + number % 10
        number = Math.floor(number / 10)
    }
    return console.log(reverseNumber);
}
reverse(number)


//best practice
let inputNumber = 82874285;
function reverseNumber(inputNumber) {
    //validation
    if (typeof inputNumber !== 'number') return "enter number"

    let result = 0
    while (inputNumber > 0) {
        //1234

        //4
        let numberMod = inputNumber % 10

        //123
        inputNumber = parseInt(inputNumber / 10)

        result = result * 10 + numberMod
    }
    return result
}
console.log(reverseNumber(inputNumber));

