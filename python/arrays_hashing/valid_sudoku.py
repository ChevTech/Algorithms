from typing import List


class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        
        rows = []
        columns = []
        boxes = []
        
        for i in range(9):
            rows.append(set())
            columns.append(set())
            boxes.append(set())

        # i = row, j = column
        for i in range(9):
            for j in range(9):
                num = board[i][j]

                if num == ".":
                    continue;

                row_quotient = i // 3
                col_quotient = j // 3
                box = row_quotient * 3 + col_quotient

                if num in rows[i] or num in columns[j] or num in boxes[box]:
                    return False

                rows[i].add(num)
                columns[j].add(num)
                boxes[box].add(num)

        return True

def test_sudoku_validator():
    solution = Solution()
    
    # Test Case 1: Valid Sudoku
    valid_board = [
        ["5","3",".",".","7",".",".",".","."],
        ["6",".",".","1","9","5",".",".","."],
        [".","9","8",".",".",".",".","6","."],
        ["8",".",".",".","6",".",".",".","3"],
        ["4",".",".","8",".","3",".",".","1"],
        ["7",".",".",".","2",".",".",".","6"],
        [".","6",".",".",".",".","2","8","."],
        [".",".",".","4","1","9",".",".","5"],
        [".",".",".",".","8",".",".","7","9"]
    ]
    assert solution.isValidSudoku(valid_board) == True, "Test Case 1 Failed: Valid Sudoku should return True"

    # Test Case 2: Invalid Row (duplicate 5 in first row)
    invalid_row = [
        ["5","3","5",".","7",".",".",".","."],
        ["6",".",".","1","9","5",".",".","."],
        [".","9","8",".",".",".",".","6","."],
        ["8",".",".",".","6",".",".",".","3"],
        ["4",".",".","8",".","3",".",".","1"],
        ["7",".",".",".","2",".",".",".","6"],
        [".","6",".",".",".",".","2","8","."],
        [".",".",".","4","1","9",".",".","5"],
        [".",".",".",".","8",".",".","7","9"]
    ]
    assert solution.isValidSudoku(invalid_row) == False, "Test Case 2 Failed: Invalid row should return False"

    # Test Case 3: Invalid Column (duplicate 6 in first column)
    invalid_column = [
        ["5","3",".",".","7",".",".",".","."],
        ["6",".",".","1","9","5",".",".","."],
        [".","9","8",".",".",".",".","6","."],
        ["8",".",".",".","6",".",".",".","3"],
        ["4",".",".","8",".","3",".",".","1"],
        ["7",".",".",".","2",".",".",".","6"],
        ["6","6",".",".",".",".","2","8","."],
        [".",".",".","4","1","9",".",".","5"],
        [".",".",".",".","8",".",".","7","9"]
    ]
    assert solution.isValidSudoku(invalid_column) == False, "Test Case 3 Failed: Invalid column should return False"

    # Test Case 4: Invalid Box (duplicate 5 in top-right 3x3 box)
    invalid_box = [
        ["5","3",".",".","7",".",".","5","."],
        ["6",".",".","1","9","5",".",".","."],
        [".","9","8",".",".",".",".","6","."],
        ["8",".",".",".","6",".",".",".","3"],
        ["4",".",".","8",".","3",".",".","1"],
        ["7",".",".",".","2",".",".",".","6"],
        [".","6",".",".",".",".","2","8","."],
        [".",".",".","4","1","9",".",".","5"],
        [".",".",".",".","8",".",".","7","9"]
    ]
    assert solution.isValidSudoku(invalid_box) == False, "Test Case 4 Failed: Invalid box should return False"

    # Test Case 5: Empty board (all dots)
    empty_board = [
        [".",".",".",".",".",".",".",".",".",],
        [".",".",".",".",".",".",".",".",".",],
        [".",".",".",".",".",".",".",".",".",],
        [".",".",".",".",".",".",".",".",".",],
        [".",".",".",".",".",".",".",".",".",],
        [".",".",".",".",".",".",".",".",".",],
        [".",".",".",".",".",".",".",".",".",],
        [".",".",".",".",".",".",".",".",".",],
        [".",".",".",".",".",".",".",".",".",]
    ]
    assert solution.isValidSudoku(empty_board) == True, "Test Case 5 Failed: Empty board should return True"

    print("All test cases passed!")

# Run the tests
test_sudoku_validator()