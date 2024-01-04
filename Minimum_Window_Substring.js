// Given two strings s and t of lengths m and n respectively, return the minimum window 
// substring
//  of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.



// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

function minWindow(s, t) {
    const charCount = {}
    let requiredChars = 0

    for (const char of t) {
        charCount[char] = (charCount[char] || 0) + 1
        requiredChars++
    }

    let left = 0
    let right = 0
    let minLen = Infinity
    let minWindowStart = 0

    while (right < s.length) {
        if (charCount[s[right]] > 0) {
            requiredChars--
        }
        charCount[s[right]] = (charCount[s[right]] || 0) - 1
        right++

        while (requiredChars === 0) {
            if (right - left < minLen) {
                minLen = right - left
                minWindowStart = left
            }

            charCount[s[left]]++
            if (charCount[s[left]] > 0) {
                requiredChars++
            }
            left++
        }
    }

    return minLen === Infinity ? "" : s.substring(minWindowStart, minWindowStart + minLen)
}

