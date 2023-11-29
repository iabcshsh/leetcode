
# number of ways to divide a long corridor 
# Combinatorics, Space Optimized DP, O(N) time, O(1) space
def numberOfWays(corridor: str) -> int:
    mod = 10**9 + 7
    ans = 1
    seats = 0
    plants = 0
    seat_count = 0

    for char in corridor:
        if char == 'S':
            seats += 1

    if seats == 0 or seats == 1 or seats % 2 != 0:
        return 0

    for char in corridor:
        if seat_count == 2 and (char == 'P' or char == 'S'):
            plants += 1  
            if char == 'S':
                ans = (ans * plants) % mod
                seat_count = 1
                plants = 0
        elif char == 'S':
            seat_count += 1

    return ans

print(numberOfWays("PPSPSP"))
print(numberOfWays("SSSSS"))
print(numberOfWays("SSPPSPS"))








