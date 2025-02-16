import unittest
from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        if len(nums) == 0:
            return []
        
        map = {}

        for i in range(0, len(nums)):
            num = nums[i]
            if num in map:
                return [map[num], i]
            
            map[target-num] = i
        
        return []

class TestTwoSum(unittest.TestCase):
   def setUp(self):
       self.solution = Solution()
   
   def test_basic_case(self):
       nums = [2,7,11,15]
       target = 9
       result = self.solution.twoSum(nums, target)
       self.assertEqual(sorted(result), [0,1])  # Sort since order doesn't matter
   
   def test_multiple_solutions_returns_first(self):
       nums = [3,3,3,3]
       target = 6
       result = self.solution.twoSum(nums, target)
       # Should return first valid pair
       self.assertEqual(len(result), 2)
       self.assertEqual(nums[result[0]] + nums[result[1]], target)
   
   def test_no_solution(self):
       nums = [1,2,3,4]
       target = 10
       result = self.solution.twoSum(nums, target)
       self.assertEqual(result, [])
   
   def test_empty_array(self):
       nums = []
       target = 5
       result = self.solution.twoSum(nums, target)
       self.assertEqual(result, [])
   
   def test_negative_numbers(self):
       nums = [-1,-2,-3,-4]
       target = -5
       result = self.solution.twoSum(nums, target)
       self.assertEqual(sorted(result), [1,2])
   
   def test_zero_target(self):
       nums = [1,0,-1]
       target = 0
       result = self.solution.twoSum(nums, target)
       self.assertEqual(nums[result[0]] + nums[result[1]], target)

if __name__ == '__main__':
   unittest.main()