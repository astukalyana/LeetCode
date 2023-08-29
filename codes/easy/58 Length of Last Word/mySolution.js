/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let mod = s.trim()
    let arr = mod.split(" ")
    let last_index = arr.length - 1

    return arr[last_index].length
};