class Solution:
    def countNicePairs(self, nums: List[int]) -> int:
        def rev(k):
            res = 0
            while k != 0:
                t = k % 10
                res = (res * 10) + t
                k = k // 10
            return res

        arr = []
        for i in nums:
            key = i - rev(i)
            arr.append(key)

        print(arr)

        counter = 0
        dict_ = {}
        mod = 10**9 + 7

        for value in arr:
            if value not in dict_:
                dict_[value] = 0
            counter = (counter + dict_[value]) % mod
            dict_[value] += 1

        return counter

