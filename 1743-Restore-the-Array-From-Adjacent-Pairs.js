/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
var restoreArray = function(adjacentPairs) {
    let mapstorage = {};
    adjacentPairs.forEach(a => {
        if (mapstorage[a[0]]) {
            mapstorage[a[0]].push(a[1]);
        } else {
            mapstorage[a[0]] = [a[1]];
        }
        if (mapstorage[a[1]]) {
            mapstorage[a[1]].push(a[0]);
        } else {
            mapstorage[a[1]] = [a[0]];
        }
    });

    let pointer;
    let val;

    for (let key in mapstorage) {
        if (Array.isArray(mapstorage[key]) && mapstorage[key].length === 1) {
            pointer = key;
            val = pointer;
            break;
        }
    }

    let result = [];
    result.push(pointer);
    for (let i = 1; i <= adjacentPairs.length; i++) {
        let re = mapstorage[pointer];
        if (Array.isArray(re) && re.length > 0) {
            console.log("c",re[0])
            let newval = re[0] == val ? re[1] : re[0];
            result.push(newval);
            val = pointer;
            pointer = newval;
        } else {
            console.error("Invalid input: Expected an array at mapstorage[" + pointer + "]");
            return [];
        }
    }
    return result;
};
