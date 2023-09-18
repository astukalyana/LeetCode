/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let result = [];

    sorted = nums.sort((a, b) => {return a - b});
    
    for (let i = 0; i < sorted.length; i++) {
        if(sorted[i] == target) result.push(i);
    }

    return result;
};