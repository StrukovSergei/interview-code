// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

function topKFrequent(nums, k) {
    const frequencyMap = new Map()
  
    for (const num of nums) {
      frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1)
    }
  
    const uniqueElements = [...frequencyMap.keys()]
  
    uniqueElements.sort((a, b) => frequencyMap.get(b) - frequencyMap.get(a))
  
    return uniqueElements.slice(0, k)
  }
  
