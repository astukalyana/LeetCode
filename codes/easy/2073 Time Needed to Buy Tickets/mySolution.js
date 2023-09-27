/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let count = 0;
    let current = 0;

    while(tickets[k] > 0) {
        if(tickets[current] > 0) {
            tickets[current]--;
            count++;
        }
        current++;
        if(current == tickets.length) current = 0;
    }

    return count;
};