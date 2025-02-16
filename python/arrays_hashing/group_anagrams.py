import unittest
from typing import List

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        groups = {}

        for word in strs:
            anagramKey = self.getAnagramKey(word)

            if anagramKey not in groups:
                groups[anagramKey] = []
            groups[anagramKey].append(word)

        return list(groups.values())

    def getAnagramKey(self, s: str) -> tuple:
        freq = [0] * 26 # fixed length array of 26 (all lowercase letters)

        for i in range(0, len(s)):
            index = ord(s[i]) - ord('a')
            freq[index] = freq[index] + 1


        return tuple(freq)

class TestGroupAnagrams(unittest.TestCase):
   def setUp(self):
       self.solution = Solution()

   def test_basic_anagrams(self):
       strs = ["eat","tea","tan","ate","nat","bat"]
       result = self.solution.groupAnagrams(strs)
       # Sort each group and the overall result for consistent comparison
       result = [sorted(group) for group in result]
       result.sort(key=lambda x: x[0])
       
       expected = [["ate","eat","tea"], ["bat"], ["nat","tan"]]
       expected = [sorted(group) for group in expected]
       expected.sort(key=lambda x: x[0])
       
       self.assertEqual(result, expected)

   def test_single_string(self):
       strs = ["a"]
       result = self.solution.groupAnagrams(strs)
       self.assertEqual(result, [["a"]])

   def test_empty_strings(self):
       strs = ["", ""]
       result = self.solution.groupAnagrams(strs)
       self.assertEqual(result, [["", ""]])

   def test_no_anagrams(self):
       strs = ["cat", "dog", "pig"]
       result = self.solution.groupAnagrams(strs)
       # Each string should be in its own group
       self.assertEqual(len(result), 3)
       self.assertTrue(all(len(group) == 1 for group in result))

   def test_all_same_anagrams(self):
       strs = ["aaa", "aaa"]
       result = self.solution.groupAnagrams(strs)
       self.assertEqual(result, [["aaa", "aaa"]])

   def test_getAnagramKey(self):
       # Test the key generation
       result1 = self.solution.getAnagramKey("eat")
       result2 = self.solution.getAnagramKey("tea")
       self.assertEqual(result1, result2)
       
       result3 = self.solution.getAnagramKey("bat")
       self.assertNotEqual(result1, result3)

if __name__ == '__main__':
   unittest.main()