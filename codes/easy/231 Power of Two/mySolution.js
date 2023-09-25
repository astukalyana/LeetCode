/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n < 0) return false;

    let temp = 1;

    while(temp <= n) {
        if (temp === n) return true;

        temp *= 2;

    }

    return false;
};