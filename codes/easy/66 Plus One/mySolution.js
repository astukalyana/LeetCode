/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let len = digits.length - 1
    let carry = false
    digits[len]++
    for(let i = len; i >= 0; i--) {
        if (carry) digits[i]++
        if(digits[i] > 9) {
            carry = true
            digits[i] = 0;
        } else {
            carry = false
        }
    }

    if(carry) return [1, ...digits]
    
    return digits
};