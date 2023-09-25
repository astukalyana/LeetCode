/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n === 1) {
        return "1";
    } else {
        let result = "";
        let prev = countAndSay(n - 1);
        let count = 0;
        let current = 0;

        for(let i = 0; i < prev.length; i++) {
            if(current === 0) current = prev[i];
            if(current !== prev[i]) {
                result += count.toString();
                result += current.toString();

                current = prev[i];
                count = 1;
            } else {
                count++;
            }

            if(i === prev.length - 1) {
                result += count.toString();
                result += current.toString();
            }
        }

        return result;
    }
};