// 총 N개의 정수가 주어졌을 때, 정수 v가 몇 개인지 구하는 프로그램을 작성하시오.
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let answer = 0;

const zwei = input[1].split(' ').map((v, _) => +v);

for (let i of zwei) {
  if (i === +input[2]) {
    answer += 1;
  }
}

console.log(answer);
