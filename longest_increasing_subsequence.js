/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
	// O(n^2)
    let cache=Array(nums.length).fill(1);
    for (let i = nums.length - 1; i >= 0; i--) {
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]<nums[j]){
                 cache[i]=Math.max(cache[i],1+cache[j])
            }
           
        }
    }
    return Math.max(...cache)
};
