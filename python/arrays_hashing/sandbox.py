class Solution:
    def canBePalindrome(self, s: str) -> bool:
        left = 0
        right = len(s) - 1
        replacements = 1

        while left < right:
            if s[left] != s[right]:
                if replacements == 0:
                    return False
                else:
                    replaceLeft = s[right] + s[left+1:right]
                    replaceRight = s[left:right-1] + s[left]
                    return self.canBePalindrome(replaceLeft) or self.canBePalindrome(replaceRight)
                
            left += 1
            right -= 1
        return True 

# Test cases
def test():
    solution = Solution()
    
    # Test case 1: Already a palindrome
    assert solution.canBePalindrome("abcba") == True, "Test case 1 failed"
    
    # Test case 2: Can become palindrome with one change
    assert solution.canBePalindrome("abcea") == True, "Test case 2 failed"
    
    # Test case 3: Cannot become palindrome
    assert solution.canBePalindrome("abcde") == False, "Test case 3 failed"
    
    print("All test cases passed!")

# Run tests
test()
