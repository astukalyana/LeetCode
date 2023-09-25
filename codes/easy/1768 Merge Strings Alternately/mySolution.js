/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let result = "";

    let longLength = Math.max(word1.length, word2.length);
    let shortLength = Math.min(word1.length, word2.length);

    let temp = "";
    if(word1.length >= word2.length) {
        temp = word1;
    } else {
        temp = word2
    }

    for(let i = 0; i < longLength; i++) {
        if(i < shortLength) {
            result += word1[i];
            result += word2[i];
        } else {
            result += temp[i];
        }
    }

    return result;
};