// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.


// 처음 풀은 방법 // 배열내 원소를 전부 곱해서 새로운 배열에 집어 넣어 최댓값을 찾는다.
function solution(numbers) {
    let col = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0 ; j < numbers.length; j++) {
            if (i !== j){  // 같은 인덱스를 중복해서 나타내면 같은 요소를 곱해진 값이 배열에 추가되기 때문에 조건문 사용
                col.push(numbers[i] * numbers[j]);   
            } 
        }
    }
    return Math.max(...col);
}

// 보다 간단한 풀이 (정답 참조) 

function solution(numbers) {
    numbers.sort((a,b)=> a - b);
    return Math.max(numbers[0]*numbers[1],numbers[numbers.length-1]*numbers[numbers.length-2]); // 음수 중 절대값이 큰 것 끼리 곱한 값과 양수 중 절대값이 큰 것 끼리 곱한 값을 비교!
}