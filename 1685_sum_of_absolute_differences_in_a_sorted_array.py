
# sum of absolute differences in a sorted array
# prefix sum O(n) time O(n) space
def getSumAbsoluteDifferences(nums: list[int]) -> list[int]:
    n=len(nums)
    prefix=[nums[0]]
    for i in range(1,n):
        prefix.append(prefix[-1]+nums[i])
    res=[]
    for i in range(n):
        l_sum=prefix[i]-nums[i]
        r_sum=prefix[-1] - prefix[i]
        r_count=n-1-i
        sum=(i*nums[i]-l_sum)+(r_sum-r_count*nums[i])
        res.append(sum)
    return res
    
getSumAbsoluteDifferences([2,3,5])
