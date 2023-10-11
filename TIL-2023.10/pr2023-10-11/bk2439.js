// 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제
// 하지만, 오른쪽을 기준으로 정렬한 별(예제 참고)을 출력하시오.
const input = require('fs').readFileSync('/dev/stdin').toString();

let answer = '';
let floor = '';

for (let i = 1; i < +input + 1; i++) {
  for (let h = 0; h < +input - i; h++) {
    floor += ' ';
  }
  for (let j = 0; j < i; j++) {
    floor += '*';
  }
  answer += `${floor}\n`;
  floor = '';
}

console.log(answer);
