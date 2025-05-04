function moveAllZeroToEnd(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            [arr[i], arr[count]] = [arr[count], arr[i]];
            count++;
        }
    }
    return arr;
}

arr = [1, 0, 0, 2, 0, 3, 0]
console.log(moveAllZeroToEnd(arr));

