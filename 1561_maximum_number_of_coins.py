

# Greedy simulation with sorting O(nlogn) time O(n) space
def maxCoins( piles:list[int]) -> int:
    length=len(piles)
    choose=length//3
    piles.sort()
    re=0
    while choose>0:
        piles.pop()
        re+=piles.pop()
        choose-=1
    print(re)
    return re
maxCoins([2,4,1,2,7,8])
maxCoins([9,8,7,6,5,1,2,3,4]) 


























