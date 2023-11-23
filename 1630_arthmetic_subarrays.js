/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    function check(arr){
        const set = new Set(arr);
         let [min,max]=[Math.min(...arr),Math.max(...arr)]
         let len=arr.length;
         let diff=(max-min)/(len-1)
        for(let i=0;i<len;i++){
            if (!set.has(min + i * diff)) {
                return false;
            }
        }
        return true
        
    }
    const res = [];
    for (let j = 0; j < l.length; j++) {
        const subarray = nums.slice(l[j], r[j] + 1);
        res.push(check(subarray));
    }
    return res;
};
