// 칠판에 붙여진 단어들이 주어질 때, 영석이가 세로로 읽은 순서대로 글자들을 출력하는 프로그램을 작성하시오.
const maxNum = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((v, _) => v.replace('\r', '').length);

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((v, _) => v.replace('\r', '').split(''));

let answer = '';

for (let h of input) {
  if (h.length !== Math.max(...maxNum)) {
    while (h.length !== Math.max(...maxNum)) {
      h.push('');
    }
  }
}

for (let j = 0; j < Math.max(...maxNum); j++) {
  for (let i of input) {
    answer += i[j];
  }
}

console.log(answer);
