package Java;

public class KthSmallestElementInASortedMatrix {
    public int kthSmallest(int[][] matrix, int k) {
        int n = matrix.length;
        if(n == 0) return 0;

        int l = matrix[0][0];
        int r = matrix[n-1][n-1] + 1;

        while(l < r){
            int mid = l + (r - l) / 2;
            int count = 0; //How many are less than mid?
            int j = n-1;

            for(int i=0; i < n; i++){
                while(j >= 0 && matrix[i][j] > mid) j--;
                count += (j + 1);
            }

            if(count < k) l = mid + 1;
            else r = mid;
        }

        return l;
    }
}
