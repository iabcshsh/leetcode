/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function(nums) {
    // function to reverse number
    function rev(k) {
        let res = 0;
        while (k != 0) {
            let t = k % 10;
            res = (res * 10) + t;
            k = Math.floor(k / 10);
        }
        return res;
    }

    let arr=[]
    for (let i of nums) {
        let key = i - rev(i);
            arr.push(key)
    }
    console.log(arr)
    let counter = 0;
    let dict={}
    let  mod = (10 ** 9)+ 7
    arr.forEach((value) => {
        if (!dict[value]) {
            dict[value] = 0;
        }
        counter = (counter + dict[value]) % mod;
        dict[value] += 1;
    });
    return counter
};


