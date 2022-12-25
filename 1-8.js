var array = [1, 31, "Amir", "test", false];
var stringType = 0
var boolianType = 0
var numberType = 0
for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") { stringType++ }
    else if (typeof array[i] === "number") { numberType++ }
    else if (typeof array[i] === "boolean") { boolianType++ }
}
console.log("string:", stringType, "number:", numberType, "boolian:", boolianType);

