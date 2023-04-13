//  어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다. 정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요.


// for 문으로 풀기

function solution(n) {
    for (let i = 1 ; i <= n/2 ; i++) {
        if (i*i === n) {
            return 1
        } 
}
    return 2;
}



// for문이 아닌 풀이

function solution(n) {
    return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}