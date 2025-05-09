class Solution {
    max_profit(prices) {
        let minSoFar = prices[0];
        let res = 0;
        for (let i = 1; i < prices.length; i++) {
            minSoFar = this.min(prices[i], minSoFar);
            res = this.max(res, prices[i] - minSoFar);
        }
        return res;
    }

    max(val1, val2) {
        if (val1 > val2) {
            return val1;
        }
        else {
            return val2;
        }
    }
    min(val1, val2) {
        if (val1 < val2) {
            return val1;
        }
        else {
            return val2;
        }
    }
}

obj1 = new Solution();



