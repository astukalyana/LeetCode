/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let pref = "";
    let min_length = 0;

    for (let i = 0; i < strs.length; i++) {
        if(strs[i].length > min_length) min_length = strs[i].length 
    }

    for (let i = 0; i < min_length; i++) {
        let curr = ""
        for(let j = 0; j < strs.length; j++) {
            if(curr === "") curr = strs[j][i]
            
            if(strs[j][i] !== curr) return pref
        }
        pref += curr
        curr = ""
    }

    return pref;
};