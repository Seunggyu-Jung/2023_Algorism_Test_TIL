// 어떤 문자열에 대해서 접미사는 특정 인덱스부터 시작하는 문자열을 의미합니다. 예를 들어, "banana"의 모든 접미사는 "banana", "anana", "nana", "ana", "na", "a"입니다.
// 문자열 my_string이 매개변수로 주어질 때, my_string의 모든 접미사를 사전순으로 정렬한 문자열 배열을 return 하는 solution 함수를 작성해 주세요.


// 처음 풀이 : for 문과 if문, replace 활용 - 코드가 다소 복잡함
function solution(my_string) {
    let answer = [];
    answer.push(my_string)
    for (let i of my_string) {
        if (my_string.length === 1) {
            break
        } else {
            answer.push(my_string.replace(i,""))
            my_string = my_string.replace(i,"")    
        }
    }
    return answer.sort();
}

// slice 활용 : slice(beginIndex,endIndex) - endIndex에서 하나 더 빠짐

function solution(my_string) {
    let answer = [];
    for (let i = 0; i < my_string.length; i++) {
        answer.push(my_string.slice(i))
    }
    return answer.sort();
}

