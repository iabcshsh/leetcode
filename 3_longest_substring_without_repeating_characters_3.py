# sliding window approach with hashmap O(n) solution
def lengthOfLongestSubstring( s: str) -> int:
    l=0;
    length=0
    subMap={}
    for r in range(len(s)):
        if subMap.get(s[r]) is not None:
           pos=subMap.get(s[r])
           l=max(l,pos+1)
        subMap.update({s[r]:r})
        length=max(length,r-l+1)
    return length



ans=lengthOfLongestSubstring("abcabcbb")
print(ans)

