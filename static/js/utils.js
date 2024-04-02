// utils.js

export function accumulate(inputArray) {
    let result = [];
    let sum = 0;
    for (let i = 0; i < inputArray.length; i++) {
        sum += inputArray[i];
        result.push(sum);
    }
    return result;
}
