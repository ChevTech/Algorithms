class Solution:
    def isPalindrome(self, s: str) -> bool:
        # clean of all non-alphanumeric character
        left = 0
        right = len(s) - 1
        while(left < right):
            leftChar = s[left].lower()
            rightChar = s[right].lower()
            if not self.isAlphanumeric(leftChar):
                left += 1
            elif not self.isAlphanumeric(rightChar):
                right -= 1
            else:
                if leftChar != rightChar:
                    return False
            
                left += 1
                right -= 1

        return True

    def isAlphanumeric(self, char: str) -> bool:
        if (ord('A') <= ord(char) and ord(char) <= ord('Z')) or \
            (ord('a') <= ord(char) and ord(char) <= ord('z')) or \
            (ord('0') <= ord(char) and ord(char) <= ord('9')):
                return True
        
        return False
        