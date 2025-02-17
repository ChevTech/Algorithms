from typing import List


def analyze_submatrices(matrix: List[List[int]]) -> List[int]:
    # Initialize array to store 36 sums (6 x 6 grid of 2x2 matrices)
    sums = [0] * 36
    
    for i in range(12):
        for j in range(12):
            row_group = i // 2
            col_group = j // 2
            matrix_number = row_group * 6 + col_group
            sums[matrix_number] = sums[matrix_number] + matrix[i][j]
    
    return sums

# Test matrix where each 2x2 sub-matrix contains same number for easier verification
test_matrix = [
    [0,0,1,1,2,2,3,3,4,4,5,5],
    [0,0,1,1,2,2,3,3,4,4,5,5],
    [6,6,7,7,8,8,9,9,10,10,11,11],
    [6,6,7,7,8,8,9,9,10,10,11,11],
    [12,12,13,13,14,14,15,15,16,16,17,17],
    [12,12,13,13,14,14,15,15,16,16,17,17],
    [18,18,19,19,20,20,21,21,22,22,23,23],
    [18,18,19,19,20,20,21,21,22,22,23,23],
    [24,24,25,25,26,26,27,27,28,28,29,29],
    [24,24,25,25,26,26,27,27,28,28,29,29],
    [30,30,31,31,32,32,33,33,34,34,35,35],
    [30,30,31,31,32,32,33,33,34,34,35,35]
]

# This should print a list of 36 sums
print(analyze_submatrices(test_matrix))