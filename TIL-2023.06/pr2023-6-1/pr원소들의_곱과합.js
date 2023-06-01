// 정수가 담긴 리스트 num_list가 주어질 때, 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.

// 전형적인 for문으로 풀기
function solution(num_list) {
    let sum = 0;
    let multi = 1;
    for (let i = 0 ; i < num_list.length; i++){
        sum += num_list[i];
        multi *= num_list[i];
    }
    return sum**2 > multi ? 1 : 0;
}

// for of문으로 풀기 : 보다 코드가 간결해진다

function solution(num_list) {
    let sum = 0;
    let multi = 1;
    for (let i of num_list){
        sum += i;
        multi *= i;
    }
    
    return sum**2 > multi ? 1 : 0;
}


