/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let current = 1;

    while(current * current <= num) {
        if(current * current == num) return true;

        ++current;
    }

    return false;
};