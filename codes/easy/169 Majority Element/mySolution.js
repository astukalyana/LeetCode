/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0;
    let current = 0;

    for(let i = 0; i < nums.length; i++) {
        if(count == 0) {
            current = nums[i];
        }

        if(current == nums[i]) {
            count++;
        } else {
            count--;
        }
    }

    return current;
};