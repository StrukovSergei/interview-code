// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // Check if the lengths are different
    if (s.length !== t.length) {
        return false;
    }

    // Create an object to store the frequency of characters in s
    const charFrequency = {};

    // Iterate through string s and update the frequency of each character
    for (let char of s) {
        charFrequency[char] = (charFrequency[char] || 0) + 1;
    }

    // Iterate through string t and decrement the frequency of each character
    for (let char of t) {
        if (!(char in charFrequency)) {
            // If a character in t is not in s, return false
            return false;
        }

        charFrequency[char]--;

        // If the frequency becomes negative, return false
        if (charFrequency[char] < 0) {
            return false;
        }
    }

    // If the lengths are the same and all frequencies are zero, return true
    return true;
};

// Example usage:
console.log(isAnagram("anagram", "nagaram")); // Output: true
console.log(isAnagram("rat", "car")); // Output: false
