def transpose(matrix: list[list[int]]) -> list[list[int]]:
        ans=[]
        for i in range(len(matrix)) :
            for j in range(len(matrix[i])):
                #print(j)
                if len(ans) <=j:
                    ans.append([])
                ans[j].append(matrix[i][j])
        return ans
            
