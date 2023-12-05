# count of matches in tournament
# Easy Time: O(logn) Space: O(1)
def numberOfMatches(n: int) -> int:
        matches = 0
        while n > 1:
            if n % 2 == 0:
                matches += n // 2
                n = n // 2
            else:
                matches += (n - 1) // 2
                n = (n - 1) // 2 + 1
        return matches






