function reverse(arr, start, end){
    while(start<end){
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
    return arr
}

function rotateArray(arr, d){
    let n = arr.length;
    d = d%n;
    first=reverse(arr, 0, d-1);
    second = reverse(arr, d, n-1);
    third = reverse(arr, 0, n-1);
    return third;
}

arr = [1, 2, 3, 4, 5]
d = 2;
console.log(rotateArray(arr, d));