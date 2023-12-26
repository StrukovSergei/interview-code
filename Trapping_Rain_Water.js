// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.



// Example 1:


// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9


function trap(height) {
    if (!height || height.length < 3) {
        return 0
    }

    let left = 0
    let right = height.length - 1
    let leftMax = 0
    let rightMax = 0
    let result = 0

    while (left < right) {
        leftMax = Math.max(leftMax, height[left])
        rightMax = Math.max(rightMax, height[right])

        if (leftMax < rightMax) {
            result += leftMax - height[left]
            left++
        } else {
            result += rightMax - height[right]
            right--
        }
    }

    return result
}

