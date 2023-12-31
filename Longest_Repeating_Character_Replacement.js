// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.



// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achieve this answer too.


function longestSubstring(s, k) {
    let maxLen = 0
    let maxCount = 0
    let start = 0
    const charCount = new Map()

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end]
        charCount.set(currentChar, (charCount.get(currentChar) || 0) + 1)
        maxCount = Math.max(maxCount, charCount.get(currentChar))

        while (end - start + 1 - maxCount > k) {
            const startChar = s[start]
            charCount.set(startChar, charCount.get(startChar) - 1)
            start++
        }

        maxLen = Math.max(maxLen, end - start + 1)
    }

    return maxLen
}
