
import unittest
from typing import List


class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freqMap = {}
        for num in nums:
            freqMap[num] = freqMap.get(num, 0) + 1

        buckets = []
        for i in range(len(nums) + 1):
            buckets.append([])

        for num, freq in freqMap.items():
            buckets[freq].append(num)
        
        res = []
        for i in range(len(buckets)-1, -1, -1):
            for num in buckets[i]:
                if len(res) < k:
                    res.append(num)
            
        return res

class TestTopKFrequent(unittest.TestCase):
   def setUp(self):
       self.solution = Solution()

   def test_basic_case(self):
       nums = [1,1,1,2,2,3]
       k = 2
       result = self.solution.topKFrequent(nums, k)
       # Sort for consistent comparison since order doesn't matter
       self.assertEqual(sorted(result), [1,2])

   def test_single_element(self):
       nums = [1]
       k = 1
       result = self.solution.topKFrequent(nums, k)
       self.assertEqual(result, [1])

   def test_all_same_frequency(self):
       nums = [1,1,2,2,3,3]
       k = 3
       result = self.solution.topKFrequent(nums, k)
       self.assertEqual(sorted(result), [1,2,3])

   def test_multiple_frequencies(self):
       nums = [1,1,1,2,2,3,3,3,3]
       k = 2
       result = self.solution.topKFrequent(nums, k)
       self.assertEqual(sorted(result), [1,3])

   def test_negative_numbers(self):
       nums = [-1,-1,-2,-2,-2]
       k = 1
       result = self.solution.topKFrequent(nums, k)
       self.assertEqual(result, [-2])

   def test_k_equals_array_length(self):
       nums = [1,2,3]
       k = 3
       result = self.solution.topKFrequent(nums, k)
       self.assertEqual(sorted(result), [1,2,3])

   def test_frequencies_in_order(self):
       nums = [1,1,1,2,2,3]
       k = 3
       result = self.solution.topKFrequent(nums, k)
       self.assertEqual(len(result), 3)
       # First element should have highest frequency
       self.assertEqual(result[0], 1)

if __name__ == '__main__':
   unittest.main()