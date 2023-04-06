// 문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
    let answer = ''
    for (const i in my_string) {
        if (my_string[i] === my_string[i].toUpperCase()) {
            answer += my_string[i].toLowerCase()
        } else {
            answer += my_string[i].toUpperCase()
        }
    }
    return answer;
}

// 반복문을 사용하지 않고 푸는 경우
function solution(my_string) {
    return [...my_string].map((el) => (el) === (el).toUpperCase() ? (el).toLowerCase() : (el).toUpperCase()).join("");
}