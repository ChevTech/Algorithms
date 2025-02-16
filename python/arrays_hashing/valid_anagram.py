import unittest

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        freq = [0] * 26 # fixed length array of 26 (all lowercase letters)

        for i in range(0, len(s)):
            self.increment(freq, s[i])
            self.decrement(freq, t[i])

        for char in freq:
            if char != 0:
                return False

        return True

    def increment(self, freq, char):
        index = ord(char) - ord('a')
        freq[index] = freq[index] + 1

    def decrement(self, freq, char):
        index = ord(char) - ord('a')
        freq[index] = freq[index] - 1

class TestIsAnagram(unittest.TestCase):
   def setUp(self):
       self.solution = Solution()
   
   def test_valid_anagram(self):
       s = "anagram"
       t = "nagaram" 
       result = self.solution.isAnagram(s, t)
       self.assertTrue(result)
   
   def test_not_anagram(self):
       s = "rat"
       t = "car"
       result = self.solution.isAnagram(s, t)
       self.assertFalse(result)
   
   def test_different_lengths(self):
       s = "abc"
       t = "abcd"
       result = self.solution.isAnagram(s, t)
       self.assertFalse(result)
   
   def test_empty_strings(self):
       s = ""
       t = ""
       result = self.solution.isAnagram(s, t)
       self.assertTrue(result)
   
   def test_same_letters_different_count(self):
       s = "aabc"
       t = "abcc"
       result = self.solution.isAnagram(s, t)
       self.assertFalse(result)
   
   def test_repeated_letters(self):
       s = "aaaa"
       t = "aaaa"
       result = self.solution.isAnagram(s, t)
       self.assertTrue(result)

if __name__ == '__main__':
   unittest.main()