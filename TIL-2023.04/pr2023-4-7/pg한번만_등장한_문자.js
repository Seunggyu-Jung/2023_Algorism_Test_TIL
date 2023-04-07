// 문자열 s가 매개변수로 주어집니다. s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요. 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.


function solution(s) {
    let answer = '';
    let STR = [...s].sort()
    if(STR[0] != STR[1]){
        answer += STR[0];
    }
    for (let i = 1; i < STR.length ; i++){
        if (STR[i-1] != STR[i]) {
            if(STR[i] != STR[i+1]){
                answer += STR[i];
            }
        }
    }
    return answer;
}

// for문을 사용하지 않은 풀이
function solution(s) {
    s = s.split("").sort()
    return s.filter((v,i) => s[i-1] != s[i] && s[i] != s[i+1])
            .join("");
}