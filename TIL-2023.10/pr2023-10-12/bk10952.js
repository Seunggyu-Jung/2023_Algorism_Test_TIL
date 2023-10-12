// 입력은 여러 개의 테스트 케이스로 이루어져 있다.
// 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)
// 입력의 마지막에는 0 두 개가 들어온다.

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let answer = '';

for (let i = 0; i < input.length - 1; i++) {
  let zwei = input[i].split(' ').map((v, _) => +v);
  answer += `${zwei[0] + zwei[1]}\n`;
}

console.log(answer);
