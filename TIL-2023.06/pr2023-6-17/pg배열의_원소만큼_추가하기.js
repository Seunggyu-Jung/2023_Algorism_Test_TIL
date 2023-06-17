// 아무 원소도 들어있지 않은 빈 배열 X가 있습니다. 양의 정수 배열 arr가 매개변수로 주어질 때, arr의 앞에서부터 차례대로 원소를 보면서 원소가 a라면 X의 맨 뒤에 a를 a번 추가하는 일을 반복한 뒤의 배열 X를 return 하는 solution 함수를 작성해 주세요.

// for문 활용(이중 포문 : 비추)
function solution(arr) {
  let answer = [];
  for (let i of arr) {
    for (let j = 1; j <= i; j++) {
      answer.push(i);
    }
  }
  return answer;
}

// reduce, Array생성자 함수 활용(시간이 오래걸림)
function solution(arr) {
  return arr.reduce((list, num) => [...list, ...new Array(num).fill(num)], []);
}
