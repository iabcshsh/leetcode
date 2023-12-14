def onesMinusZeros(grid)
        m=len(grid)
        n=len(grid[0])
        onesrow = [0] * m
        onescol = [0] * n
        for i in range(m):
            for j in range(n):
                onesrow[i]+=grid[i][j]
                onescol[j]+=grid[i][j]
        diff = [[0] * n for _ in range(m)]
        
        for i in range(m):
            for j in range(n):
                diff[i][j]=2*onesrow[i]+2*onescol[j]-n-m;
            
        
        return diff
