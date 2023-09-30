// (세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.
// (1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 (3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오.

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .map((v, _) => v.replace('\r', ''))
  .map((v, i) => (i === 1 ? v.split('') : v));

const first = +input[0] * +input[1][2];
const second = +input[0] * +input[1][1];
const third = +input[0] * +input[1][0];
const fourth = +input[0] * +input[1].join('');

console.log(`${first}\n${second}\n${third}\n${fourth}`);
