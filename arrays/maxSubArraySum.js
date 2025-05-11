class Solution {
    maxSubarraySum(arr) {
        // Your code here
        const n = arr.length;
        let maxEnding = arr[0], res=arr[0];
        for(let i =1; i<n; i++){
            maxEnding = Math.max(maxEnding+arr[i], arr[i]);
            res = Math.max(maxEnding, res);
        }
        return res;
        
    }
}


const obj1 = new Solution();
let arr1 = [-2, -4], arr2 = [2, 3, -8, 7, -1, 2, 3];

console.log(obj1.maxSubarraySum(arr1));
console.log(obj1.maxSubarraySum(arr2));