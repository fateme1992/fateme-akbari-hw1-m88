var arr = [1, "who", true, false, 6, "7", "Fateme"]
let number = Number(prompt("please add a number"))
console.log(arr)

function arrIndex(number) {
    if (number < 0 && number > arr.length - 1) {
        number =
            Number(prompt("please add another number"))
        console.log(number)
    } else if (number >= 0 && number <= arr.length - 1) {
        console.log("type of " + arr[number] + " is " + typeof arr[number])
    }

}

arrIndex(number)