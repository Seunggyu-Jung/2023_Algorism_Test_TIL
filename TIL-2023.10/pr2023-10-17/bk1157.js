// 알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오. 단, 대문자와 소문자를 구분하지 않는다.
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('')
  .map((v, _) => v.toLowerCase());

const alpha = Array(26)
  .fill()
  .map((v, i) => String.fromCharCode(i + 97));

const file = Array(26).fill(0);
let count = 0;

for (let i of input) {
  file[alpha.indexOf(i)] += 1;
}

for (let j of file) {
  if (j === Math.max(...file)) {
    count += 1;
  }
}

if (count === 1) {
  console.log(alpha[file.indexOf(Math.max(...file))].toUpperCase());
} else {
  console.log('?');
}
