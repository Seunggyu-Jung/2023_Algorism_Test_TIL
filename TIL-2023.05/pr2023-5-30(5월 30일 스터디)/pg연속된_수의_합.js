// 연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 두 정수 num과 total이 주어집니다. 연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.

// 처음 풀이한 식 : a, a+1, a+2 ...을 더해서 푸는 방식 사용

function solution(num, total) {
    // a 뒤에 오는 상수 : q
    let q = 0;
    for (let i = 0 ; i < num; i++){
        q += i;
    }
    let a = (total - q) / num
    let answer = [];
    for (let j = 0 ; j < num ; j++ ){
        answer.push(a + j)
    }
    return answer;
}