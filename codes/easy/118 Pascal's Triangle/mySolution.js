/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows === 1) return [[1]];

    pascal_tri = [[1]]

    for(let i = 0; i < numRows - 1; i++) {
        let temp = [1]

        if(numRows > 2) {
            let current = pascal_tri[i]
            
            for (let j = 0; j < current.length - 1; j++) {
                let next = current[j] + current[j + 1];
                temp.push(next)
            }
        }

        temp.push(1)
        pascal_tri.push(temp)
    }

    return pascal_tri
};