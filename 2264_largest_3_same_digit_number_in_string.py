# Largest 3 same digit number in string
# Easy Time O(n) | Space O(1)
def largestGoodInteger(num: str) -> str:
        m=num[0]
        n=num[1]
        max_value='\0'
        for i in range(2,len(num)):
            if m ==n and n == num[i]:
                max_value=max(max_value,num[i])
                m=num[i-1]
                n=num[i-0]
            else:
                m=num[i-1]
                n=num[i-0]
        return "" if max_value =='\0' else str(str(max_value) * 3)


