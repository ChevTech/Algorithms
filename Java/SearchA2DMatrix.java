package Java;

public class SearchA2DMatrix {
    public boolean solution1(int[][] matrix, int target) {
        int n = matrix.length;
        if(n == 0) return false;
        int m = matrix[0].length;
        if(m == 0) return false;

        int i = n-1;
        int j = 0;

        while(i >= 0 && j < m){
            if(matrix[i][j] == target){
                return true;
            } else if(matrix[i][j] > target){
                i--;
            } else {
                j++;
            }
        }

        return false;
    }

    /* BinarySearch */
    public boolean solution2(int[][] matrix, int target) {
        int n = matrix.length;
        if(n == 0) return false;
        int m = matrix[0].length;
        if(m == 0) return false;

        int l = 0;
        int r = (n*m) - 1;

        while(l < r){
            int mid = l + (r - l) / 2;
            if(matrix[mid/m][mid%m] == target){
                return true;
            } else if (matrix[mid/m][mid%m] < target){
                l = mid + 1;
            } else {
                r = mid;
            }
        }

        return matrix[r/m][r%m] == target;
    }
}
