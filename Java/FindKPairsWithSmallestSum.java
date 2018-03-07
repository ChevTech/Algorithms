package Java;

import java.util.ArrayList;
import java.util.List;
import java.util.PriorityQueue;

public class FindKPairsWithSmallestSum {
    public List<int[]> kSmallestPairs(int[] nums1, int[] nums2, int k) {
        int n = nums1.length;
        int m = nums2.length;

        if(n == 0 || m == 0) return new ArrayList<>();

        PriorityQueue<tuple> pq = new PriorityQueue<tuple>(m, (a, b) -> { return a.getSum() - b.getSum(); } );

        for(int j=0; j < m; j++){
            pq.offer(new tuple(0, j, nums1[0] + nums2[j]));
        }

        List<int[]> result = new ArrayList<>();
        for(int i=0; i < k && pq.size() > 0; i++){
            tuple t = pq.poll();
            result.add(new int[]{nums1[t.getX()], nums2[t.getY()]});

            if(t.getX() + 1 > n-1) continue;
            pq.offer(new tuple(t.getX()+1, t.getY(), nums1[t.getX()+1] + nums2[t.getY()]));
        }

        return result;
    }

    class tuple {
        public int x;
        public int y;
        public int sum;

        public tuple(int x, int y, int sum){
            this.x = x;
            this.y = y;
            this.sum = sum;
        }

        public int getSum(){
            return this.sum;
        }

        public int getX(){
            return this.x;
        }

        public int getY(){
            return this.y;
        }
    }
}
