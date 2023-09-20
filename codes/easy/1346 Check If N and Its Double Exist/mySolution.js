/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let mp = new Map();

    for(let i = 0; i < arr.length; i++) {
        mp.set(arr[i], i);
    }

    for(let j = 0; j < arr.length; j++ ){
        console.log(j, mp.get(arr[j] * 2));

        if(mp.get(arr[j] * 2) !== undefined) {
            if(j !== mp.get(arr[j] * 2)) return true;
        }
    }

    return false;
};