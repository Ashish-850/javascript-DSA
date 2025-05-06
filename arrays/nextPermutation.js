class Solution {
    nextPermuation(arr) {
        const n = arr.length;
        let pivot = -1;
        for (let i = n - 2; i >= 0; i--) {
            if (arr[i] < arr[i + 1]) {
                pivot = i;
                break;
            }

        }

        if (pivot === -1) {
            this.reverseArray(arr, 0, n - 1);
            return;
        }
        for (let i = n - 1; i > pivot; i--) {
            if (arr[i] > arr[pivot]) {
                [arr[i], arr[pivot]] = [arr[pivot], arr[i]];
                break;
            }
        }

        this.reverseArray(arr, pivot + 1, n - 1);

    }
    reverseArray(arr, start, end) {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }
}


const obj = new Solution();  

let arr = [2, 4, 1, 7, 5, 0];
obj.nextPermuation(arr); 

console.log(arr); 
