// 두 정수 a, b와 boolean 변수 flag가 매개변수로 주어질 때, flag가 true면 a + b를 false면 a - b를 return 하는 solution 함수를 작성해 주세요.


// 가장 기본적인 if문
function solution(a, b, flag) {
    if (flag) {
        return a + b;
    } else {
        return a - b;   
    }
}

// 삼항 연산자 
function solution(a, b, flag) {
    return (flag) ? a+b : a-b;
}