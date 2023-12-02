# find-words-that-can-be-formed-by-characters
# Easy, Time O(n+m.k) Space O(1)
from collections import defaultdict

def countCharacters(words: list[str], chars: str) -> int:
        char_count = defaultdict(int)
        for c in chars:
            char_count[c] += 1

        length=0
        for i in words:
            word_count = defaultdict(int)
            for c in i:
                word_count[c] += 1
            flag = True
            for c,count in word_count.items():
                if char_count[c] < count:
                    flag = False
                    break
            if flag:
                length += len(i)
        return length
