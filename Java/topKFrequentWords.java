class Solution {
    public List<String> topKFrequent(String[] words, int k) {
        int n = words.length;
        List<String> res = new ArrayList<String>();
        if(n == 0) return res;

        Map<String, Integer> map = new HashMap<String, Integer>();
        for(int i=0; i < n; i++){
            map.put(words[i], map.getOrDefault(words[i], 0) + 1);
        }

        PriorityQueue<Map.Entry<String, Integer>> pq = new PriorityQueue<>(k, (a,b) -> {
            if(a.getValue() == b.getValue()){
                return b.getKey().compareTo(a.getKey());
            }
            return a.getValue() - b.getValue();
        });

        for(Map.Entry<String, Integer> entry : map.entrySet()){
            pq.offer(entry);
            if(pq.size() > k) pq.poll();
        }

        while(!pq.isEmpty()){
            res.add(0, pq.poll().getKey());
        }

        return res;
    }
}