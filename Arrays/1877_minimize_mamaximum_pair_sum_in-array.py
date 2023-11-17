class Solution(object):
    def minPairSum(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        nums.sort()
        highest = []

        for i in range(len(nums) // 2):
            highest.append(nums[i] + nums[len(nums) - 1 - i])

        return max(highest)
        