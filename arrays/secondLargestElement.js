// function to find second largest element in the the array
function secondlargestElement(arr) {
    //lenght of the given array
    const n = arr.length;
    if (n < 2) {
        return -1
    }

    // Assign secondlargest and largest value to -1
    let secondLargest = -1;
    let largest = -1;

    for (let i = 0; i < n; i++) {
        // if current value of array is more than largest
        // copy largest to second and update largest with current
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        }
        // update second if it less than largest and greater than last second
        else if ((arr[i] > secondLargest) && arr[i] < largest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest
}

arr = [2, 3];
console.log(secondlargestElement(arr));