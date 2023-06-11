 def findNonMinOrMax(self, nums: List[int]) -> int:
        minimum=float('inf')
        maximum=float('-inf')
        for a in nums:
            minimum=min(minimum,a)
            maximum=max(maximum,a)
            
        for a in nums:
            if a!= minimum and a != maximum:
                return a
        return -1
