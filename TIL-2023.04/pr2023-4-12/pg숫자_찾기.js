// 정수 num과 k가 매개변수로 주어질 때, num을 이루는 숫자 중에 k가 있으면 num의 그 숫자가 있는 자리 수를 return하고 없으면 -1을 return 하도록 solution 함수를 완성해보세요.


// for문을 사용하는 경우
function solution(num, k) {
    num = [...num + ""]
    for (let i of num) {
        if (i == k) {
            return num.indexOf(i) + 1
        } 
    }
    return -1
}


// for문을 사용하지 않은 경우 -> 마지막 논리 연산자 부분 정답 참고

function solution(num, k) {
    return num.toString()
              .split("")
              .map((el) => Number(el))
              .indexOf(k) + 1 || -1  // + 1 || -1 이부분이 이해가 가지 않는다.
}