// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let answer = '';

for (let i = 1; i < input.length; i++) {
  let menu = input[i].split(' ').map((v, _) => +v);

  answer += `Case #${i}: ${menu[0]} + ${menu[1]} = ${menu[0] + menu[1]}\n`;
}

console.log(answer);
