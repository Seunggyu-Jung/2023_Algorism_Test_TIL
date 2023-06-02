// 정수 배열 arr와 자연수 k가 주어집니다.
// 만약 k가 홀수라면 arr의 모든 원소에 k를 곱하고, k가 짝수라면 arr의 모든 원소에 k를 더합니다.
// 이러한 변환을 마친 후의 arr를 return 하는 solution 함수를 완성해 주세요.

// 삼항 연산자 풀이
function solution(arr, k) {
  return k % 2 === 0 ? arr.map(el => el + k) : arr.map(el => el * k);
}

// for of 풀이 : 생각보다 시간이 좀 걸린다.

function solution(arr, k) {
  let answer = [];
  for (let i of arr) {
    if (k % 2 === 0) {
      answer.push(i + k);
    } else {
      answer.push(i * k);
    }
  }

  return answer;
}
