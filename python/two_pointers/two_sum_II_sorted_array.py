import unittest
from typing import List

class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        left = 0
        right = len(numbers) - 1

        while left < right:
            numSum = numbers[left] + numbers[right]

            if (numSum > target):
                right = right - 1
            elif (numSum < target):
                left = left + 1
            else:
                return [left + 1, right + 1]

class TestTwoSum(unittest.TestCase):
    def setUp(self):
        self.solution = Solution()

    def test_basic_case(self):
        numbers = [2, 7, 11, 15]
        target = 9
        expected = [1, 2]  # indices are 1-based
        self.assertEqual(self.solution.twoSum(numbers, target), expected)

    def test_consecutive_numbers(self):
        numbers = [1, 2, 3, 4, 5]
        target = 3
        expected = [1, 2]
        self.assertEqual(self.solution.twoSum(numbers, target), expected)

    def test_negative_numbers(self):
        numbers = [-3, -2, -1, 0, 1, 2]
        target = -5
        expected = [1, 2]  # -3 + -2 = -5
        self.assertEqual(self.solution.twoSum(numbers, target), expected)

    def test_large_numbers(self):
        numbers = [1000000, 2000000, 3000000]
        target = 5000000
        expected = [2, 3]
        self.assertEqual(self.solution.twoSum(numbers, target), expected)

    def test_minimal_array(self):
        numbers = [1, 2]
        target = 3
        expected = [1, 2]
        self.assertEqual(self.solution.twoSum(numbers, target), expected)

    def test_target_at_ends(self):
        numbers = [1, 3, 5, 7, 9]
        target = 10
        expected = [1, 5]  # 1 + 9 = 10
        self.assertEqual(self.solution.twoSum(numbers, target), expected)

    def test_zero_target(self):
        numbers = [-3, -1, 0, 1, 2]
        target = 0
        expected = [2, 4]  # -1 + 1 = 0
        self.assertEqual(self.solution.twoSum(numbers, target), expected)

    def test_numbers_far_apart(self):
        numbers = [1, 5, 10, 15, 20]
        target = 21
        expected = [1, 5]  # 1 + 20 = 21
        self.assertEqual(self.solution.twoSum(numbers, target), expected)

if __name__ == '__main__':
    unittest.main()