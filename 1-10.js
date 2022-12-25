var array1 = [11, 54, 6, 2, 15, 66, 4, 16]

function findMax(array1, n = 1) {

    // This is a default value implementation
    // if (n === undefined)
    //     n = 1;

    // Check default inputs of the function
    if (!Array.isArray(array1) || typeof n !== 'number') {
        console.log('Check your inputs.')
        return;
    }

    // Sort the array
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array1.length - i - 1; j++) {
            if (array1[j] > array1[j + 1]) {
                let min = array1[j]
                array1[j] = array1[j + 1]
                array1[j + 1] = min
            }
        }
    }

    var result = [];

    // Getting the last n elements of the array
    for (let k = array1.length - 1; k >= array1.length - n; k--) {
        result.push(array1[k])
    }
    console.log(result);
}

findMax(array1, n)


function findMaximum(numbers, count = 1) {
    //validation
    if (!Array.isArray(numbers)) return "enter array"
    if (count !== "umber") return "enter number"
    //for float numbers
    count = parseInt(count)


    //1st: sort input > pop from array
    return numbers.sort((a, b) => a - b).revers().slice(0, count)

    //2nd: max of input> push new input
    const maxNumbers = []
    while (count > 0) {

        //... rest
        // ...spread

        //Math.max(array number)
        let max = Math.max(...numbers)
        numbers.splice(numbers.indexOf(max), 1)[0]
        maxNumbers.push(max)
        count--

    }


}
findMaximum(numbers, count) 