// 정수가 담긴 리스트 num_list가 주어질 때, 리스트의 길이가 11 이상이면 리스트에 있는 모든 원소의 합을 10 이하이면 모든 원소의 곱을 return하도록 solution 함수를 완성해주세요.

// for문 1개만 사용하는 경우

function solution(num_list) {
    let answer = 1;
    for (let i = 0; i < num_list.length; i++){
        if (num_list.length >= 11) {
            answer += num_list[i];
        } else {
            answer *= num_list[i];
        }
    }
    if (num_list.length >= 11) {
        return answer -1;
    } else {
        return answer;
    }
}

// reduce를 사용하는 경우

function solution(num_list) {
    const multi = (acc, v) => acc * v;
    const add = (acc, v) => acc + v;

    return num_list.length > 10 ? num_list.reduce(add, 0) : num_list.reduce(multi, 1);
}