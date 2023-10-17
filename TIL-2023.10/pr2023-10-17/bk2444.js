// 예제를 보고 규칙을 유추한 뒤에 별을 찍어 보세요.
const input = require('fs').readFileSync('/dev/stdin').toString().trim();

let answer = '';

const fullCount = +input * 2 - 1;

for (let j = 0; j < fullCount; j++) {
  for (let h = 0; h < Math.abs(Math.floor(fullCount / 2) - j); h++) {
    answer += ' ';
  }
  for (
    let i = Math.abs(Math.floor(fullCount / 2) - j) * 2;
    i < fullCount;
    i++
  ) {
    answer += '*';
  }
  answer += '\n';
}

console.log(answer);
