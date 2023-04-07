// 문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때, my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.

function solution(my_string, num1, num2) {
    let answer = '';
    let Dex = [...my_string]
    for (let i in Dex) {
        if( i == num1) {
            answer += Dex[num2]
        } else if (i == num2) {
            answer += Dex[num1]
        } else {
            answer += Dex[i]
        }
    }
    return answer;
}


// 구조 분해 할당 풀이법
function solution(my_string, num1, num2) {
    my_string = my_string.split("");
    [my_string[num1],my_string[num2]] = [my_string[num2],my_string[num1]]
    return my_string.join("");
}

// map 메서드 사용방식
function solution(my_string, num1, num2) {
    my_string = my_string.split("")
    return my_string.map((v,i) => i === num1 ? my_string[num2] : i === num2 ? my_string[num1] : v).join("");
}