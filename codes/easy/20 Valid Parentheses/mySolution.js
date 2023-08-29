/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const pairs = {'(': ')', '{': '}', '[':']'}

    let stack = []

    for (let i = 0; i < s.length; i++) {
        if(s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i])
        } else {
            if(s[i] === pairs[stack[stack.length - 1]]) {
                stack.pop()
            } else {
                return false
            }
        }
    }

    if (stack.length === 0) return true
    else return false
    
};