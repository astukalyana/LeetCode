/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let flag = true;
    let mp = new Map();
    let ver = new Map();
    for(let i = 0; i < arr.length; i++) {
        if(mp.get(arr[i]) == undefined) mp.set(arr[i], 1);
        else mp.set(arr[i], mp.get(arr[i]) + 1);
    }

    console.log(mp);

    mp.forEach((value, key) => {
        console.log(value)
        if(ver.get(value) === undefined) {
            ver.set(value, 1);
        }
        else {
            flag = false;
        };
    });



    return flag;
};