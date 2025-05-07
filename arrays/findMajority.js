class Solution {
    findMajority(arr) {
        let n = arr.length;
        let ele1 = -1, ele2 = -1;
        let cnt1 = 0, cnt2 = 0;
        for (let i = 0; i < n; i++) {
            // increment the count for candidate1
            if (ele1 === arr[i]) {
                cnt1 += 1;
            }
            // increment the count for candidate2
            else if (ele2 === arr[i]) {
                cnt2 += 1;
            }
            // new candidate 1 if count zero
            else if (cnt1 === 0) {
                ele1 = arr[i];
                cnt1 += 1;
            }
            // new candidate 2 if count zero
            else if (cnt2 === 0) {
                ele2 = arr[i];
                cnt2 += 1;
            }
            // decrease count if neither 0
            else {
                cnt1 -= 1;
                cnt2 -= 1;
            }


        }
        const res = [];
        cnt1 = 0, cnt2 = 0;
        // count the occurence of the candidate
        for (let i = 0; i < n; i++) {
            if (ele1 === arr[i]) {
                cnt1 += 1;
            }
            if (ele2 === arr[i]) {
                cnt2 += 1;
            }
        }

        if (cnt1 > Math.floor(n / 3)) {
            res.push(ele1);
        }
        if (cnt2 > Math.floor(n / 3)) {
            res.push(ele2);
        }

        if ((res.length === 2) && (res[0] > res[1])) {
            [res[0], res[1]] = [res[1], res[0]];
        }
        return res;

    }
}

const obj1 = new Solution();
let arr = [1, 2, 3, 4, 5];
console.log(obj1.findMajority(arr));