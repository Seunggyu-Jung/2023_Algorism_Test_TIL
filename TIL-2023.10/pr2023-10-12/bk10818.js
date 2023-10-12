// N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((v, _) => v.split(' '));

let zwei = input[1].map((v, _) => +v);

const answer = `${Math.min(...zwei)} ${Math.max(...zwei)}`;

console.log(answer);
