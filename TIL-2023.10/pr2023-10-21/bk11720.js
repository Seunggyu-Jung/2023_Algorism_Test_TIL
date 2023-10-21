// N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((v, _) => v.split(''));

let answer = 0;

for (let i of input[1]) {
  answer += +i;
}

console.log(answer);
