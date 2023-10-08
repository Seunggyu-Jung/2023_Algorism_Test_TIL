// n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.

const input = require('fs').readFileSync('/dev/stdin').toString();
let answer = 0;

for (let i = 1; i < +input + 1; i++) {
  answer += i;
}

console.log(answer);
