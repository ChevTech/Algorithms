package Java;

import java.util.ArrayList;
import java.util.List;

public class SpiralMatrix {
    public List<Integer> spiralOrder(int[][] matrix) {
        if (matrix.length == 0 || matrix[0].length == 0) return new ArrayList();

        int i1 = 0;
        int i2 = matrix.length - 1;
        int j1 = 0;
        int j2 = matrix[0].length - 1;

        List<Integer> result = new ArrayList<>();

        while (i1 <= i2 && j1 <= j2) {
            for (int j = j1; j <= j2; j++) {
                result.add(matrix[i1][j]);
            }

            for (int i = i1 + 1; i <= i2; i++) {
                result.add(matrix[i][j2]);
            }

            if (i1 < i2 && j1 < j2) {
                for (int j = j2 - 1; j > j1; j--) {
                    result.add(matrix[i2][j]);
                }

                for (int i = i2; i > i1; i--) {
                    result.add(matrix[i][j1]);
                }
            }

            i1++;
            j1++;
            i2--;
            j2--;
        }

        return result;
    }
}