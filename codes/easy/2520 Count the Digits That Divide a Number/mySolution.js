/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let arr = [];
    let count = 0;
    let temp = num;

    while(temp > 0) {
        let mod = temp % 10;
        arr.push(mod);
        temp = (temp - mod) / 10;
    }

    for(let i = 0; i < arr.length; i++) {
        if(num % arr[i] == 0) count++;
    }

    return count;
};