# check if two string arrays are equivalent
# Easy, Time: O(n*m) Space: O(1)
def arrayStringsAreEqual(word1: list[str], word2: list[str]) -> bool:
    word1pointer = 0
    word2pointer = 0
    string1pointer = 0
    string2pointer = 0

    while len(word1) > word1pointer and len(word2) > word2pointer:

        if word1[word1pointer][string1pointer] == word2[word2pointer][string2pointer]:
            string1pointer += 1
            string2pointer +=  1
        else:
            return False

        if string1pointer == len(word1[word1pointer]):
            string1pointer = 0
            word1pointer += 1
        if string2pointer == len(word2[word2pointer]):
            string2pointer = 0
            word2pointer += 1

    return word1pointer == len(word1) and word2pointer == len(word2)

print(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]))
