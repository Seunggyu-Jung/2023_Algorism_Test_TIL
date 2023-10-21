// 문자열을 입력으로 주면 문자열의 첫 글자와 마지막 글자를 출력하는 프로그램을 작성하시오.

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((v, _) => v.replace('\r', ''))
  .map((v, _) => v.split(''));

let answer = '';

for (let i = 1; i < input.length; i++) {
  answer += input[i][0];
  answer += input[i][input[i].length - 1];
  answer += '\n';
}

console.log(answer);
