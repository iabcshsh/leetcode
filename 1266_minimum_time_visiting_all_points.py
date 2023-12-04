# Move Diagonally as Much as Possible
# Easy Time:  O(n) | Space: O(1)
def minTimeToVisitAllPoints(points: list[list[int]]) -> int:
    path=points[0]
    seconds=0
    i=0
    while i < len(points)-1:
        x=abs(points[i][0]-points[i+1][0])
        y=abs(points[i][1]-points[i+1][1])
        seconds+=max(x,y)
        i+=1
    return seconds 
print(minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]]))


