class Solution {
    public int solution(int n) {
        int result = 0;
        String answer = String.valueOf(n);
        for(String i : answer.split("") ){
            result += Integer.parseInt(i);
        }
        return result;
    }
}