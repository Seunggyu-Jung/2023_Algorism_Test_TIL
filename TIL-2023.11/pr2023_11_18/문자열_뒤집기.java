class Solution {
    public String solution(String my_string) {
        String[] answer = my_string.split("");
        String result = "";
        for (int i = answer.length -1; i >= 0 ; i--){
            result += answer[i];
        }
        return result;
    }
}