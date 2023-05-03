// 이것을 문자열을 민다고 정의한다면 문자열 A와 B가 매개변수로 주어질 때, A를 밀어서 B가 될 수 있다면 밀어야 하는 최소 횟수를 return하고 밀어서 B가 될 수 없으면 -1을 return 하도록 solution 함수를 완성해보세요.

// 처음 풀이한 내용 // for문 사용
function solution(A, B) {
    let answer = ""
    if(A === B){
        return 0
    } else {
        for(let i = 1 ; i < A.length ; i++){
            answer += A.slice(-i) + A.slice(0,-i)  // 맨 뒤에서 땔 부분들을 자르고, 나머지 부분들을 붙인다.
            if (answer === B) {
                return i
            }
            answer = ""
        }    
    }
    return -1;
}