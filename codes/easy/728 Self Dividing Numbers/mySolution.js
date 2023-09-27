/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    const result = [];

    for(let i = left; i <= right; i++) {
        let temp = i;

        while(temp > 0) {
            if(temp % 10 == 0 || i % (temp % 10) != 0) break;
            temp = Math.floor(temp / 10);
        }

        if(temp == 0) result.push(i);
    }

    return result;
};