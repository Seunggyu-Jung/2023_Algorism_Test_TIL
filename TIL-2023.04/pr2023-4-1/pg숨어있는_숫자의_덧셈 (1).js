// 문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
    let answer = 0;
    let num = [...my_string].filter((el) => (el) >= 0).map((el)=>parseInt(el));
    for (let i = 0 ; i <= num.length - 1; i++){
        answer += num[i];
    }
    return answer;
}


// 다른 좋은 풀이

function solution(my_string) {
    let sum = 0;
    for (const ch of my_string) {
        if (!isNaN(ch)) sum += +ch;
    }
    return sum;
}