# sum of absolute differences in a sorted array
# prefix sum  on the fly O(n) time O(1) space
def getSumAbsoluteDifferences(nums: list[int]) -> list[int]:
    n=len(nums)
    total=sum(nums)
    l_sum=0
    res=[]
    for i in range(n):
        r_sum=total-l_sum-nums[i]
        l_total=i*nums[i]-l_sum
        r_total=r_sum-(n-1-i)*nums[i]
        res.append(l_total+r_total)
        l_sum=l_sum+nums[i]
    return res
    
getSumAbsoluteDifferences([2,3,5])
