// N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램을 작성하시오. 출력 형식에 맞춰서 출력하면 된다.

const input = require('fs').readFileSync('/dev/stdin').toString();

let answer = '';

for (let i = 1; i < 10; i++) {
  answer += `${input[0]} * ${i} = ${+input[0] * i}\n`;
}

console.log(answer);
