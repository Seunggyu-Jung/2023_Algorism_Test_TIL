class Solution {
    public int solution(int slice, int n) {
        int answer = 1;
        while(n > answer * slice){
            answer++;
        }
        return answer;
    }
}