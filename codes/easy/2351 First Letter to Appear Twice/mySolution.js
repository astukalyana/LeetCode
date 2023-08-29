/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let mp = new Map()
    for (let i = 0; i < s.length; i++) {
        if(mp.get(s[i])) {
            return s[i];
        } else {
            mp.set(s[i], 'exist')
        }
    }
};