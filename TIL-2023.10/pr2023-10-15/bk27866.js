// 단어 S와 정수 i가 주어졌을 때, S의 i번째 글자를 출력하는 프로그램을 작성하시오.
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((v, _) => v.replace('\r', ''));

const splitedInput = input[0].split('');

console.log(splitedInput.filter((v, i) => i === +input[1] - 1).join(''));
