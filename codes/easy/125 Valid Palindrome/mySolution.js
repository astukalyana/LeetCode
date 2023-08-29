/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase()
    let regex = /[a-z0-9]/
    let left_ptr = 0;
    let right_ptr = s.length - 1;

    while (left_ptr < right_ptr) {
        while(!regex.test(s[left_ptr])) left_ptr++;
        while(!regex.test(s[right_ptr])) right_ptr--;
        
        if(s[left_ptr] !== s[right_ptr]) {
            console.log(s[left_ptr], s[right_ptr])
            return false
        }


        left_ptr++;
        right_ptr--;
    }

    return true
};