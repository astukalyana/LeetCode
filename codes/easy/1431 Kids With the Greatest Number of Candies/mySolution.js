/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let result = [];
    let max = 0;

    for(let i = 0; i < candies.length; i++) {
        max = Math.max(max, candies[i]);
    }

    for(let i = 0; i < candies.length; i++) {
        result.push(candies[i] + extraCandies >= max);
    }

    return result;
};