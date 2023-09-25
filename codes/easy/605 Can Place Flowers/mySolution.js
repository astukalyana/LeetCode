/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let count = 0;

    for(let i = 0, j = i - 1, k = i + 1; i < flowerbed.length; i++, j++, k++) {
        if(i === 0) {
            if(!flowerbed[i] && !flowerbed[k]) {
                count++;
                flowerbed[i] = 1;
            }
        } else if(i === flowerbed.length - 1) {
            if(!flowerbed[i] && !flowerbed[j]) {
                count++;
                flowerbed[i] = 1;
            }
        } else {
            if(!flowerbed[i] && !flowerbed[j] && !flowerbed[k]) {
                count++;
                flowerbed[i] = 1;
            }
        }
    }

    return n <= count;
};