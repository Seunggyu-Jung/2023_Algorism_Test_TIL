// 입력 받은 대로 출력하는 프로그램을 작성하시오.
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((v, _) => v.replace('\r', ''));

console.log(input.join('\n'));
