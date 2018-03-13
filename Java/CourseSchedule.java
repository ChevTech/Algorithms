class Solution {
    public boolean canFinish(int numCourses, int[][] prerequisites) {
        if(numCourses == 0 || prerequisites.length == 0) return true;

        List<ArrayList<Integer>> G = new ArrayList<ArrayList<Integer>>();
        int[] indegree = new int[numCourses];

        for(int i=0; i < numCourses; i++){
            G.add(i, new ArrayList<Integer>());
        }

        for(int[] pair : prerequisites){
            int course = pair[0];
            int req = pair[1];
            G.get(course).add(req);
            indegree[req]++;
        }

        int cnt = 0;
        Queue<Integer> queue = new LinkedList<Integer>();

        for(int i=0; i < indegree.length; i++){
            if(indegree[i] == 0) queue.offer(i);
        }

        while(!queue.isEmpty()){
            int v = queue.poll();
            cnt++;

            for(int w : G.get(v)){
                indegree[w]--;
                if(indegree[w] == 0){
                    queue.offer(w);
                }
            }
        }

        return cnt == numCourses && queue.isEmpty();
    }
}