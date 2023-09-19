/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const result = [];
    let lever;

    for(let i = 0; i < nums1.length; ++i) {
        let current = nums1[i];
        let greater = 0;
        lever = false;
        for(let j = 0; j < nums2.length; ++j) {
            if(nums2[j] == current) {
                lever = true;
                continue;
            }
            if(lever && (nums2[j] > current)){
                greater = nums2[j];
                break;
            }
        }

        if(greater) result.push(greater); else result.push(-1)
    }

    return result;
};