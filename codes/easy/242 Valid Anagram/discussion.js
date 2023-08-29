/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length != t.length) return false;

    s = s.toLowerCase()
    t = t.toLowerCase()

    let resS = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    let resT = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

    for(let i = 0; i < s.length; i++) {
        resS[s.charCodeAt(i)-97] += 1
        resT[t.charCodeAt(i)-97] += 1
    }
    return JSON.stringify(resT) === JSON.stringify(resS)
};