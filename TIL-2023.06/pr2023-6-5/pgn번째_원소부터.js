// 정수 리스트 num_list와 정수 n이 주어질 때, n 번째 원소부터 마지막 원소까지의 모든 원소를 담은 리스트를 return하도록 solution 함수를 완성해주세요.

// slice 사용

function solution(num_list, n) {
  return num_list.slice(n - 1);
}

// for문 사용

function solution(num_list, n) {
  let answer = [];
  for (let i = n - 1; i < num_list.length; i++) {
    answer.push(num_list[i]);
  }
  return answer;
}
