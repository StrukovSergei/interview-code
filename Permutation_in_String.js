// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.



// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false

function checkInclusion(s1, s2) {
    if (s1.length > s2.length) {
        return false
    }

    const s1Map = new Array(26).fill(0)
    const s2Map = new Array(26).fill(0)

    for (let i = 0; i < s1.length; i++) {
        s1Map[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++
        s2Map[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++
    }

    if (arraysAreEqual(s1Map, s2Map)) {
        return true
    }

    for (let i = s1.length; i < s2.length; i++) {
        s2Map[s2.charCodeAt(i - s1.length) - 'a'.charCodeAt(0)]--
        s2Map[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++

        if (arraysAreEqual(s1Map, s2Map)) {
            return true
        }
    }

    return false
}

// Helper function to check if two arrays are equal
function arraysAreEqual(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false
        }
    }
    return true
}

