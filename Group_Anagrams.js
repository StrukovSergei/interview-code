// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

function groupAnagrams(strs) {
    const anagramsMap = {}

    for (const word of strs) {
        const sortedWord = word.split('').sort().join('')

        if (anagramsMap.hasOwnProperty(sortedWord)) {
            anagramsMap[sortedWord].push(word)
        } else {
            anagramsMap[sortedWord] = [word]
        }
    }

    const result = Object.values(anagramsMap)

    return result
}

