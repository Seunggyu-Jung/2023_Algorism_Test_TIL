// 정수 N개로 이루어진 수열 A와 정수 X가 주어진다. 이때, A에서 X보다 작은 수를 모두 출력하는 프로그램을 작성하시오.

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((v, _) => v.split(' '));

let answer = '';

for (let i of input[1]) {
  if (+input[0][1] > i) {
    answer += `${i} `;
  }
}

console.log(answer);
