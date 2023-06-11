def smallestString(s: str) -> str:
        res = ""
        prev='z'
        last='z'
        for i in range(len(s)):
            c = s[i]
            if i== 0:
                prev=prev
            else:
                prev = s[i - 1]
            # prevch=chr(ord(s[i])-1)
            if c <= prev and c< last:
                res += chr(ord(c) - 1)
                last =res[-1]
                continue
            res+= c
            last =res[-1]
        return res
print(smallestString("cbabc"))
# "baabc"