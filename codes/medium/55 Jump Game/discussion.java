/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let n = nums.length;
    let last_pos = n - 1;

    for(let i = n - 1; i >= 0; --i) {
        if(nums[i] + i >= last_pos) last_pos = i;
    }

    return last_pos == 0;
};