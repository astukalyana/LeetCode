/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    left_ptr = 0;
    right_ptr = nums.length - 1;

    while(left_ptr <= right_ptr) {
        mid = Math.round((right_ptr + left_ptr) / 2)

        if(nums[mid] > target) {
            right_ptr = mid - 1
        } else if (nums[mid] < target){
            left_ptr = mid + 1
        } else {
            return mid
        }
    }
    
    return left_ptr;
};