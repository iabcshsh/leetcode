/**
 * @param {number[]} nums
 * @return {number}
 */

var reductionOperations = function(nums) {
    let num=nums.sort((a,b)=>a-b)
    let ans=0;
    let up=0;
    for(let i=1;i<num.length;i++){
        if(num[i]!= num[i-1]){
            up+=1;
        }
        ans+=up;
    }
    return ans
};
