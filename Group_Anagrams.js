function groupAnagrams(strs) {
    const anagramsMap = {};

    for (const word of strs) {
        // Sort the letters in the word
        const sortedWord = word.split('').sort().join('');

        // Use the sorted word as a key in the map
        // Add the original word to the corresponding group
        if (anagramsMap.hasOwnProperty(sortedWord)) {
            anagramsMap[sortedWord].push(word);
        } else {
            anagramsMap[sortedWord] = [word];
        }
    }

    // Convert the values (groups of anagrams) from the map to an array
    const result = Object.values(anagramsMap);

    return result;
}

// Example usage:
const strs1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs1));

const strs2 = [""];
console.log(groupAnagrams(strs2));

const strs3 = ["a"];
console.log(groupAnagrams(strs3));
