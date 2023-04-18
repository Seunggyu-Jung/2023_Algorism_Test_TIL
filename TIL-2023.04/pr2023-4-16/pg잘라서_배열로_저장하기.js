// 문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.


// 처음 풀이한 풀이

function solution(my_str, n) {
    my_str = my_str.split("");
    let answer = [];
    let STR = ""
    for(let i of my_str) {
        STR += i;
        if (STR.length === n) {
            answer.push(STR)
            STR = ""
        }
    }
    if (STR.length != 0) {
        answer.push(STR)
    }
    return answer;
}


// 좀 더 깔끔하고 간단한 풀이

function solution(my_str, n) {
    let answer = [];
    for (let i = 0; i < my_str.length ; i += n) {
        answer.push(my_str.slice(0+i, n +i))
    }
    return answer
}

// 정규 표현식

function solution(my_str, n) {
    let reg = new RegExp(`.{1,${n}}`, 'g')
    return my_str.match(reg);
}