// 정수 n과 정수 배열 numlist가 매개변수로 주어질 때, numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return하도록 solution 함수를 완성해주세요.

// for문을 사용하지 않은 풀이

function solution(n, numlist) {
    return [...numlist].filter((el)=> (el) % n === 0);
}


// for문을 사용한 풀이

function solution(n, numlist) {
    let answer = [];
    for (let i of numlist) {
        if (i % n === 0) {
            answer.push(i)
        }
    }
    return answer;
}