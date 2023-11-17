var minPairSum = function(nums) {
    nums.sort((a,b)=>a-b)
    let highest=[];
    for(let i=0,j=nums.length-1;i<j&&j>i;i++,j--){
        highest.push(nums[i]+nums[j])
    }
    return Math.max(...highest)
};

console.log(minPairSum([3,5,4,2,4,6]))