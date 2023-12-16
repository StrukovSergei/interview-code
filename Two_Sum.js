def two_sum(nums, target):
    # Create a dictionary to store the indices of numbers
    num_indices = {}

    # Iterate through the array
    for i, num in enumerate(nums):
        # Calculate the complement (the number needed to reach the target)
        complement = target - num

        # Check if the complement is in the dictionary
        if complement in num_indices:
            # If found, return the indices of the two numbers
            return [num_indices[complement], i]
        
        # If not found, add the current number and its index to the dictionary
        num_indices[num] = i

    # If no solution is found
    return None

# Example usage:
nums1 = [2, 7, 11, 15]
target1 = 9
print(two_sum(nums1, target1))  # Output: [0, 1]

nums2 = [3, 2, 4]
target2 = 6
print(two_sum(nums2, target2))  # Output: [1, 2]

nums3 = [3, 3]
target3 = 6
print(two_sum(nums3, target3))  # Output: [0, 1]
