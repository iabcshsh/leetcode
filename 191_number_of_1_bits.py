# Number of 1 Bits
# Brian Kernighan's Algorithm O(log n) Time and O(1) space
def hammingWeight(n: int) -> int:
    count=0
    while n != 0 :
        # Unset the rightmost '1' bit in n using n &= n - 1
        n &= n - 1
        # increment count
        count +=1
    return count

print(hammingWeight(11)) # 3
