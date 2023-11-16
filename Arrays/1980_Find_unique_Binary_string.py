# Apprach 1 Recursive generate all strings
class Solution:
    def findDifferentBinaryString(self, nums: List[str]) -> str:
        hs={s for s in nums}
        def generate(curr):
            if len(curr) == n:
                if curr not in hs:
                    return curr
                return ""
            addZero=generate(curr+"0")
            if addZero:
                return addZero
            return generate(curr + "1")

        n = len(nums)
        nums = set(nums)
        return generate("")
