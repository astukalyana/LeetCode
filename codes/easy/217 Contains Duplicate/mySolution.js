/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const mp = new Map()

    for (let i = 0; i < nums.length; i++) {
        if(mp.get(nums[i])) {
            return true
        } else {
            mp.set(nums[i], 'exist')
        }
    }

    return false
};