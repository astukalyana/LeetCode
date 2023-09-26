/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if(num === 1) return true;

    let start = 1;
    let end = num / 2;

    while(start <= end) {
        let mid = Math.floor((end - start) / 2) + start;
        console.log(mid)
        if(mid*mid == num) {
            return true
        } else if (mid*mid < num) {
            start = mid + 1;
        } else {
            end = mid - 1
        }
    }

    return false
};