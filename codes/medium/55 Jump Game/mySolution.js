/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let jump = 0;

    for(let i = 0; i < nums.length - 1; i++) {
        jump--;

        if(nums[i] > jump) jump = nums[i];

        if(jump == 0) return false;
    }

    return true;
};