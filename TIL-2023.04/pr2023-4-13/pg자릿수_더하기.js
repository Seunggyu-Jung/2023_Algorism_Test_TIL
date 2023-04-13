// 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요

// for문을 사용하지 않은 풀이

function solution(n) {
    return n.toString()
            .split("")
            .reduce((a,c) => a + parseInt(c) ,0);
}

// for문을 사용한 풀이
function solution(n) {
    let answer = 0;
    for (let i of n.toString().split("")){
        answer += parseInt(i)
    }
    return answer;
}