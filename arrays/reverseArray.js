function reverseArray(arr){
    let l = arr.length;
    let n = Math.floor(arr.length/2)
    for(let i=0; i<n;i++){
        [arr[i], arr[l-1]] = [arr[l-1], arr[i]];
        l--;
    }
    return arr;
}

let arr = [1, 2, 3, 4, 5, 7];
console.log(reverseArray(arr));