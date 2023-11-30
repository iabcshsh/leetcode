# Minimum One Bit Operations to Make Integers Zero
# Hard - Math and Recursion O(log^2 n) time, O(log n) space
def minimumOneBitOperations(n: int) -> int:
        if n == 0:
            return 0
        k = 0
        curr = 1
        while (curr * 2) <= n:
            curr *= 2
            k += 1

        return 2 ** (k + 1) - 1 - minimumOneBitOperations(n ^ curr)
