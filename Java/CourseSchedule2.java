class Solution {
    public int[] findOrder(int numCourses, int[][] prerequisites) {
        if(numCourses == 0) return new int[0];
        int[] result = new int[numCourses];
        if(prerequisites.length == 0) {
            for(int i=numCourses-1; i > 0; i--) result[i] = i;
        }

        List<ArrayList<Integer>> G = new ArrayList<ArrayList<Integer>>();
        for(int i=0; i < numCourses; i++){
            G.add(i, new ArrayList<Integer>());
        }

        int[] indegree = new int[numCourses];
        for(int[] pair : prerequisites) {
            int course = pair[0];
            int req = pair[1];

            G.get(course).add(req);
            indegree[req]++;
        }

        Queue<Integer> queue = new LinkedList();
        int count = numCourses-1;

        //Get all nodes with no incoming edges
        for(int i=0; i < indegree.length; i++){
            if(indegree[i] == 0) queue.offer(i);
        }

        //For all nodes with no incoming edges
        while(!queue.isEmpty()){
            int n = queue.poll(); //get node
            result[count--] = n; //add node to list;

            for(int edge : G.get(n)){ // For each adjacent node connected to node with edge
                indegree[edge]--; // remove edge from graph
                if(indegree[edge] == 0) queue.offer(edge); //if no other edges, add node to queue
            }
        }

        if(count > 0) return new int[0];
        return result;
    }
}