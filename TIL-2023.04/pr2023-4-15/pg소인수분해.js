// 자연수 n이 매개변수로 주어질 때 n의 소인수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.


function solution(n) {
    let i = 2;
    let answer = [];
    let mid = [];
    while (i <= n) {
        if(n % i === 0) {
            for (let j = 1 ; j <= i ; j++) {
                if (i % j === 0) {
                mid.push(j)
                }
            }
            if (mid.length == 2){
                answer.push(i)
                mid = [];
                } else {
                    mid = [];
                }
        }
        i++
    }
    return answer;
}