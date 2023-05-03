// 덧셈, 뺄셈 수식들이 'X [연산자] Y = Z' 형태로 들어있는 문자열 배열 quiz가 매개변수로 주어집니다. 수식이 옳다면 "O"를 틀리다면 "X"를 순서대로 담은 배열을 return하도록 solution 함수를 완성해주세요.


// for문으로 푸는 방법 : 상당히 비추천 , 처음 푼 것이라 어쩔 수 없음
function solution(quiz) {
    let answer = [];
    let cal = 0;
    for (let i of quiz) {  // 파라미터의 배열을 순회
        i = i.split(" ")  // 빈칸을 기준으로 나누면 길이가 4인 배열이 만들어짐 
        if(i[1] == "+") {  // 연산자가 +인지 -인지 확인  
        cal += parseInt(i[0]) + parseInt(i[2])  // 각 요소가 문자열 타입이기에 타입변환을 해줌
        if (cal === parseInt(i[4])){
            answer.push("O")
            cal = 0
        } else {
            answer.push("X")
            cal = 0
        }
    } else {
        cal += parseInt(i[0]) - parseInt(i[2])
        if (cal === parseInt(i[4])){
            answer.push("O")
            cal = 0
        } else {
            answer.push("X")
            cal = 0
        }
    }
    }
    return answer;
}


// 구조분해할당으로 푸는 방법

function solution(quiz) {
    let answer = [];
     quiz.map(item => { // 배열을 순회할 때, for문을 안쓰고 {}와 map으로 순회 가능 
        let hole = 0
        const [x, sign, y, _ , z] = item.split(" ") 
        if (sign === "+"){
           hole += +x + +y
        } else if (sign === "-"){
            hole += +x - +y
        }
        answer.push(hole === +z ? "O" : "X")
        });
    return answer;
}