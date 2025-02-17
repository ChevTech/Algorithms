from typing import List


class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:

        # Need O(1) look-ups so we use a set
        numbers = set()
                
        for num in nums:
            numbers.add(num)

        longestSequenceCount = 0
        for num in numbers:
            if num - 1 in numbers:
                continue

            sequenceCount = 1   
            while num + 1 in numbers:
                sequenceCount += 1
                num = num + 1
            
            longestSequenceCount = max(sequenceCount, longestSequenceCount)
        return longestSequenceCount         

def test_longest_consecutive():
    solution = Solution()

    # Test Case 1: Basic sequence
    nums1 = [100, 4, 200, 1, 3, 2]
    expected1 = 4  # [1,2,3,4]
    assert solution.longestConsecutive(nums1) == expected1, f"Test 1 Failed: Expected {expected1}, got {solution.longestConsecutive(nums1)}"

    # Test Case 2: Empty array
    nums2 = []
    expected2 = 0
    assert solution.longestConsecutive(nums2) == expected2, f"Test 2 Failed: Expected {expected2}, got {solution.longestConsecutive(nums2)}"

    # Test Case 3: Single element
    nums3 = [1]
    expected3 = 1
    assert solution.longestConsecutive(nums3) == expected3, f"Test 3 Failed: Expected {expected3}, got {solution.longestConsecutive(nums3)}"

    # Test Case 4: Duplicate numbers
    nums4 = [1, 2, 2, 3, 3, 4, 4]
    expected4 = 4  # [1,2,3,4]
    assert solution.longestConsecutive(nums4) == expected4, f"Test 4 Failed: Expected {expected4}, got {solution.longestConsecutive(nums4)}"

    # Test Case 5: Multiple sequences
    nums5 = [1, 2, 3, 10, 11, 12, 13, 14]
    expected5 = 5  # [10,11,12,13,14]
    assert solution.longestConsecutive(nums5) == expected5, f"Test 5 Failed: Expected {expected5}, got {solution.longestConsecutive(nums5)}"

    # Test Case 6: Negative numbers
    nums6 = [-5, -4, -3, -2, 0, 1]
    expected6 = 4  # [-5,-4,-3,-2]
    assert solution.longestConsecutive(nums6) == expected6, f"Test 6 Failed: Expected {expected6}, got {solution.longestConsecutive(nums6)}"

    # Test Case 7: All same number
    nums7 = [1, 1, 1, 1]
    expected7 = 1
    assert solution.longestConsecutive(nums7) == expected7, f"Test 7 Failed: Expected {expected7}, got {solution.longestConsecutive(nums7)}"

    # Test Case 8: Large gaps
    nums8 = [1, 4, 7, 10, 13]
    expected8 = 1
    assert solution.longestConsecutive(nums8) == expected8, f"Test 8 Failed: Expected {expected8}, got {solution.longestConsecutive(nums8)}"

    print("All test cases passed!")

# Run the tests
test_longest_consecutive()