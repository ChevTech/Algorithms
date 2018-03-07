package Java;

import java.util.HashMap;
import java.util.Map;
import java.util.PriorityQueue;

public class SortCharactersByFrequency {
    public String frequencySort(String s) {
        int n = s.length();
        if(n == 0) return s;

        Map<Character, Integer> map = new HashMap<Character, Integer>();

        for(int i=0; i < n; i++){
            map.put(s.charAt(i), map.getOrDefault(s.charAt(i), 0) + 1);
        }

        PriorityQueue<Char> pq = new PriorityQueue<>(n, (a, b) -> (b.freq - a.freq));

        for(Character key : map.keySet()){
            pq.offer(new Char(key, map.get(key)));
        }

        StringBuilder sb = new StringBuilder();
        while(pq.size() > 0){
            Char ch = pq.poll();
            for(int i=0; i < ch.freq; i++) sb.append(ch.ch);
        }

        return sb.toString();
    }

    class Char {
        int freq;
        char ch;

        public Char(Character ch, Integer freq){
            this.freq = freq;
            this.ch = ch;
        }
    }
}
