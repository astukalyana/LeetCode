/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function(ranks, suits) {
    for (let i = 0; i < 4; i++) {
        if(suits[i] !== suits[i + 1]) {
            break
        }

        if(i === 3) return "Flush"
    }
    let mp = new Map()
    for (let i = 0; i < 5; i++) {
        if(mp.get(ranks[i])) {
            mp.set(ranks[i], mp.get(ranks[i]) + 1)
            if(mp.get(ranks[i]) > 2 ) return "Three of a Kind"
        } else {
            mp.set(ranks[i], 1)
        }
    }
    if(mp.size < 5) {
        return "Pair"
    } else {
        return "High Card"
    }
};