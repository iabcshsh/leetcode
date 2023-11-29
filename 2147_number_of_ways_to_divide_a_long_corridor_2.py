
# number of ways to divide a long corridor 
# Top Down DP, O(N) time, O(N) space
def numberOfWays( corridor: str) -> int:
    mod = 10 ** 9 + 7
    cache = [[-1] * 3 for _ in range(len(corridor))]

    def count(i,s):
        # base case
        if i == len(corridor):
            return 1 if s ==2 else 0

        # check cache
        if cache[i][s] != -1:
            return cache[i][s]

        # recursive logic
        if s == 2:
            if corridor[i] == "S":
                result =count(i+1,1)
            else:
                result= (count(i+1,0) + count(i+1,2)) % mod
        else:
            if corridor[i] == "S":
                result =count(i+1,s+1)
            else:
                result =count(i+1,s)
        cache[i][s] = result
        return cache[i][s]
    
    return count(0,0)

print(numberOfWays("PPSPSP"))
print(numberOfWays("SSSSS"))
print(numberOfWays("SSPPSPS"))

