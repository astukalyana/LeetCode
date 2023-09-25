/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
    let result = 0;
    let n = nums.length;
    for(let i = 0; i < n; i++) {
        if(n % (i + 1) === 0) {
            result += nums[i] * nums[i]
        }
    }

    return result;   
}