# Naive approach O(n^2) solution
def lengthOfLongestSubstring( s: str) -> int:
    length=0
    while len(s)>0:
        hmap=set()
        substrlength=0
        for j in range(len(s)):
            if s[j] not in hmap:
                hmap.add(s[j])
                substrlength+=1
            else:
                break
        if substrlength>length:
            length=substrlength
        s=s[1:]
    return length

ans=lengthOfLongestSubstring("abcabcbb")
print(ans)


