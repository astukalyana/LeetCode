/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let count = 0
    for (let i = s.length - 1; i >= 0; i--) {
        if(s[i] === ' ') {
            if(count > 0) break;
            else continue
        } else {
            count++
        }
    }   

    return count
}