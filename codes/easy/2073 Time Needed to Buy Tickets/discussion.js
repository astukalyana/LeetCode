/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let count = 0;

    for(let i = 0; i < tickets.length; i++) {
        count += Math.min(tickets[k] - (k < i), tickets[i]);
    }

    return count;
};