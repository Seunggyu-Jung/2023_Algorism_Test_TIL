// 첫 번째 줄에 A, B, C (1 ≤ A, B, C ≤ 1012)이 공백을 사이에 두고 주어진다.
// A+B+C의 값을 출력한다.

const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

console.log(+input[0] + +input[1] + +input[2]);
