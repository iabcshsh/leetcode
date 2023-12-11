def findSpecialInteger(arr: list[int]) -> int:
        obj=defaultdict(int)
        for i in arr:
            obj[i]+=1
            
        threshold = len(arr) // 4

        for key, freq in obj.items():
            if freq > threshold:
                return key
