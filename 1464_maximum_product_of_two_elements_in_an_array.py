def maxProduct(nums) :
        lar=sorted(nums)
        if len(nums) >=2:
            return (lar[-1]-1)*(lar[-2]-1)
