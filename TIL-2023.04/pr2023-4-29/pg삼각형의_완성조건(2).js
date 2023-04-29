// 삼각형의 두 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 나머지 한 변이 될 수 있는 정수의 개수를 return하도록 solution 함수를 완성해주세요.


// 처음 풀이한 방식
function solution(sides) {
    let big = Math.max(...sides);
    let small = Math.min(...sides);
    let answer = [];
    if (big - small === 1){  // 파라미터 배열의 두 요소 차이가 1인 경우
        for(let i = big + small - 1; i >= big; i--){
            answer.push(i)
        }
    } else if (big === small) {  // 파라미터 배열의 두 요소가 같은 경우
        for (let i = big + small -1 ; i >= 1; i--){
            answer.push(i)
        }
    } else { // 가장 일반적인 경우
        for (let i = big - small + 1; i < big + small; i++){
            answer.push(i)
        }
    }
    return answer.length;
}

// 수학 공식으로 푸는 경우 // 근데 모르겠음

function solution(sides) {
    return Math.min(...sides)*2-1
}