/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    const result = [];

    for(let i = left, j = 0; i <= right; i++) {
        for(j = i; j > 0; j = Math.floor(j / 10)) {
            if(j % 10 == 0 || i % (j % 10) != 0) break;
        }
        if(!j) result.push(i);
    }

    return result;
};