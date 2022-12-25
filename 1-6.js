let number = Number(prompt("please enter a number"))
let n1 = 0
let n2 = 1
let n3 = n1 + n2
let i = 0
function fibonach(number) {
    while (i < number) {
        console.log(n1)
        n3 = n1 + n2
        n1 = n2
        n2 = n3
        i++
    }
}
fibonach(number)



//best practice
function fiboSeries(seriesCount) {
    //validation
    if (seriesCount !== "number") return "eroor"

    seriesCount = parseInt(seriesCount)
    const fiboSeries = [0, 1]
    if (seriesCount == 1) return fiboSeries[0]

    for (let i = 2; i < seriesCount; i++) {
        fiboSeries[i] = fiboSeries[i - 1] + fiboSeries[i - 2]
    }
    return fiboSeries;
}
fiboSeries(seriesCount)