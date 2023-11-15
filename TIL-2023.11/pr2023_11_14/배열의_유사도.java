class Solution {
    public int solution(String[] s1, String[] s2) {
        int answer = 0;
        String[] big;
        String[] small;
        if (s1.length >= s2.length){
            big = s1;
            small = s2;
        } else {
            big = s2;
            small = s1;
        }
        for (int i = 0; i < small.length; i++){
           for (int j = 0; j < big.length; j++){
               if (big[j].equals(small[i])){
                   answer += 1;
               }
           }
        }
        return answer;
    }
}