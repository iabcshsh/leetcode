# sliding window apprach with hashset O(2n) solution
def lengthOfLongestSubstring( s: str) -> int:
    l=0;
    length=0
    subset=set()
    for r in range(len(s)):
        while s[r] in subset:
            subset.remove(s[l])
            l+=1
        subset.add(s[r])
        length=max(length,r-l+1)
    return length


ans=lengthOfLongestSubstring("abcabcbb")
print(ans)



