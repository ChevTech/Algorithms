from typing import List


class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        res = [1] * len(nums)
        
        left, right = 1, 1

        for i in range(0, len(nums)):
            res[i] *= left
            res[n-1-i] *= right
            left *= nums[i]
            right *= nums[n-1-i]

        return res

def test_product_except_self():
    solution = Solution()

    # Test Case 1: Basic example with positive numbers
    nums1 = [1, 2, 3, 4]
    expected1 = [24, 12, 8, 6]
    assert solution.productExceptSelf(nums1) == expected1, f"Test 1 Failed: Expected {expected1}, got {solution.productExceptSelf(nums1)}"

    # Test Case 2: Array with zeros
    nums2 = [1, 0, 3, 4]
    expected2 = [0, 12, 0, 0]
    assert solution.productExceptSelf(nums2) == expected2, f"Test 2 Failed: Expected {expected2}, got {solution.productExceptSelf(nums2)}"

    # Test Case 3: Array with multiple zeros
    nums3 = [0, 0, 3, 4]
    expected3 = [0, 0, 0, 0]
    assert solution.productExceptSelf(nums3) == expected3, f"Test 3 Failed: Expected {expected3}, got {solution.productExceptSelf(nums3)}"

    # Test Case 4: Array with negative numbers
    nums4 = [-1, -2, -3, -4]
    expected4 = [-24, -12, -8, -6]
    assert solution.productExceptSelf(nums4) == expected4, f"Test 4 Failed: Expected {expected4}, got {solution.productExceptSelf(nums4)}"

    # Test Case 5: Minimum length array
    nums5 = [2, 3]
    expected5 = [3, 2]
    assert solution.productExceptSelf(nums5) == expected5, f"Test 5 Failed: Expected {expected5}, got {solution.productExceptSelf(nums5)}"

    # Test Case 6: Mix of positive, negative, and zeros
    nums6 = [-1, 0, 2, -3]
    expected6 = [0, 6, 0, 0]
    assert solution.productExceptSelf(nums6) == expected6, f"Test 6 Failed: Expected {expected6}, got {solution.productExceptSelf(nums6)}"

    print("All test cases passed!")

# Run the tests
test_product_except_self()