class Solution{
    maxProfit(prices){
        const n = prices.length;
        let res = 0;
        for(let i = 0; i<n; i++){
            if(prices[i+1]>prices[i]){
                res += prices[i+1]-prices[i];
            }
        }
        return res;
    }
}

const obj1 = new Solution();
const prices1 = [4, 2, 2, 2, 4];
const prices2 = [100, 180, 260, 310, 40, 535, 695];
console.log(obj1.maxProfit(prices1));
console.log(obj1.maxProfit(prices2));
