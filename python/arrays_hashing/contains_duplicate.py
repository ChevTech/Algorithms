import unittest
from typing import List

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        if len(nums) == 0:
            return False

        seen = set()

        for num in nums:
            if num in seen:
                return True
            
            seen.add(num)

        return False

class TestContainsDuplicate(unittest.TestCase):
    def setUp(self):
        self.solution = Solution()
    
    def test_empty_array(self):
        nums = []
        result = self.solution.containsDuplicate(nums)
        self.assertFalse(result)
    
    def test_no_duplicates(self):
        nums = [1, 2, 3, 4, 5]
        result = self.solution.containsDuplicate(nums)
        self.assertFalse(result)
    
    def test_with_duplicates(self):
        nums = [1, 2, 3, 1]
        result = self.solution.containsDuplicate(nums)
        self.assertTrue(result)
    
    def test_all_duplicates(self):
        nums = [1, 1, 1, 1]
        result = self.solution.containsDuplicate(nums)
        self.assertTrue(result)
    
    def test_single_element(self):
        nums = [1]
        result = self.solution.containsDuplicate(nums)
        self.assertFalse(result)
    
    def test_negative_numbers(self):
        nums = [-1, -1, 2, 3]
        result = self.solution.containsDuplicate(nums)
        self.assertTrue(result)

if __name__ == '__main__':
    unittest.main()
