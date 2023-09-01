/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let left = 0;
    let right = s.length - 1

    let arr = s.split('')
    console.log(arr)

    const vowels = ["a", "i", "u", "e", "o", "A", "I", "U", "E", "O"]

    while (left < right) {
        if(vowels.includes(arr[left]) && vowels.includes(arr[right])) {
            let temp = arr[left]
            arr[left] = arr[right]
            arr[right] = temp

            left++
            right--;
        } 
        if(!vowels.includes(arr[left])) left++
        if(!vowels.includes(arr[right])) right--
    }

    console.log(arr)
    let result = arr.join('')
    return result;
};