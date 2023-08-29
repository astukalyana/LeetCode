/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let letterSet = new Set()
    
    for(let i = 0; i< s.length;i++){
        if(letterSet.has(s[i])) return s[i]
        letterSet.add(s[i]) 
    }
};