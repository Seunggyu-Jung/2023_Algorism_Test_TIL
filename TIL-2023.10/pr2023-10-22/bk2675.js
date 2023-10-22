// 문자열 S를 입력받은 후에, 각 문자를 R번 반복해 새 문자열 P를 만든 후 출력하는 프로그램을 작성하시오.
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((v, _) => v.replace('\r', ''))
  .map((v, _) => v.split(' '));

let answer = '';

for (let i = 1; i < input.length; i++) {
  let middle = input[i][1].split('');
  for (let k of middle) {
    for (let j = 0; j < input[i][0]; j++) {
      answer += k;
    }
  }
  answer += '\n';
}

console.log(answer);
