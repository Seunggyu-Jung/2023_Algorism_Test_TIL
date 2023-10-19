{
  /* <그림 1>과 같이 9×9 격자판에 쓰여진 81개의 자연수 또는 0이 주어질 때, 이들 중 최댓값을 찾고 그 최댓값이 몇 행 몇 열에 위치한 수인지 구하는 프로그램을 작성하시오. */
}

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((v, _) => v.split(' ').map((x) => +x));

let maxNum = 0;
let answer = '';

maxNum += Math.max(...input.map((v, _) => Math.max(...v)));
answer += maxNum + '\n';

for (let i = 0; i < input.length; i++) {
  if (input[i].includes(maxNum)) {
    answer += input.indexOf(input[i]) + 1 + ' ';
    answer += input[i].indexOf(maxNum) + 1;
    break;
  }
}

console.log(answer);
