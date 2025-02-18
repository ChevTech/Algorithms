import unittest
from typing import List


class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        results = []
        n = len(nums)

        i = 0
        while i < n - 2:
            # skip duplicates of i
            if i > 0 and nums[i] == nums[i-1]:
                i += 1
                continue

            left = i + 1
            right = n - 1
            target = -nums[i]

            while left < right:
                curr_sum = nums[left] + nums[right]
                
                if curr_sum == target:
                    results.append([nums[i], nums[left], nums[right]])
                    
                    # Skip duplicates for both pointers after finding a match
                    left += 1
                    right -= 1  # Move right pointer before checking duplicates
                    while left < right and nums[left] == nums[left-1]:
                        left += 1
                    while left < right and nums[right] == nums[right+1]:
                        right -= 1

                elif curr_sum > target:
                    right -= 1
                else:
                    left += 1
            
            i += 1

        return results
    
class TestThreeSum(unittest.TestCase):
    def setUp(self):
        self.solution = Solution()

    def test_basic_case(self):
        nums = [-1, 0, 1, 2, -1, -4]
        expected = [[-1, -1, 2], [-1, 0, 1]]
        self.assertEqual(sorted(self.solution.threeSum(nums)), sorted(expected))

    def test_all_zeros(self):
        nums = [0, 0, 0, 0]
        expected = [[0, 0, 0]]
        self.assertEqual(self.solution.threeSum(nums), expected)

    def test_no_solution(self):
        nums = [1, 2, 3, 4, 5]
        expected = []
        self.assertEqual(self.solution.threeSum(nums), expected)

    def test_empty_array(self):
        nums = []
        expected = []
        self.assertEqual(self.solution.threeSum(nums), expected)

    def test_minimal_length(self):
        nums = [1, 2]  # Less than 3 elements
        expected = []
        self.assertEqual(self.solution.threeSum(nums), expected)

    def test_duplicates_handling(self):
        nums = [-1, -1, -1, -1, 2, 2, 2, 2]
        expected = [[-1, -1, 2]]
        self.assertEqual(sorted(self.solution.threeSum(nums)), sorted(expected))

    def test_large_numbers(self):
        nums = [-1000000000, 1000000000, 1000000000, -1000000000, 0]
        expected = [[-1000000000, 0, 1000000000]]
        self.assertEqual(sorted(self.solution.threeSum(nums)), sorted(expected))

    def test_all_negative(self):
        nums = [-5, -4, -3, -2, -1]
        expected = []
        self.assertEqual(self.solution.threeSum(nums), expected)

if __name__ == '__main__':
    unittest.main()
