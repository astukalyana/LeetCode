/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let result = x.toString();

    let left = 0;
    let right = result.length - 1;

    while (left < right) {
        if(result[left] !== result[right]) {
            return false;
        }

        right--;
        left++;
    }

    return true;
};