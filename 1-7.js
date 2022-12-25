var number = Number(prompt("please enter a number"))
function remainderOfSeven(number) {
    if (number < 0) return "Bad value"
    else if (number < 7) return number
    else if (number >= 7)
        for (var i = 0; i < number; i++) {
            var j = number - 7 * i
            if (j < 7 && j >= 0) console.log(`the remainder of ${number}/7 is ${j}`)
        }
}
remainderOfSeven(number)

