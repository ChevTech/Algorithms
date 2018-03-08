public class SearchA2DMatrixII {
    public boolean searchMatrix(int[][] matrix, int target) {
        int n = matrix.length;
        if(n == 0) return false;
        int m = matrix[0].length;
        if(m == 0) return false;

        int row = 0;
        int col = m-1;

        while(row < n && col >= 0){
            if(matrix[row][col] == target){
                return true;
            } else if(matrix[row][col] < target){
                row++;
            } else {
                col--;
            }
        }

        return false;
    }
}