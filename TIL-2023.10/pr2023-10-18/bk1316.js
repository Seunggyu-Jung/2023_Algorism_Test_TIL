// 그룹 단어란 단어에 존재하는 모든 문자에 대해서, 각 문자가 연속해서 나타나는 경우만을 말한다. 예를 들면, ccazzzzbb는 c, a, z, b가 모두 연속해서 나타나고, kin도 k, i, n이 연속해서 나타나기 때문에 그룹 단어이지만, aabbbccb는 b가 떨어져서 나타나기 때문에 그룹 단어가 아니다.
// 단어 N개를 입력으로 받아 그룹 단어의 개수를 출력하는 프로그램을 작성하시오.

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((v, _) => v.replace('\r', ''))
  .map((v, _) => v.split(''));

let answer = [];
let count = 0;
for (let i = 1; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (answer.includes(input[i][j]) && input[i][j] !== answer[j - 1]) {
      count++;
      break;
    } else {
      answer.push(input[i][j]);
    }
  }
  answer = [];
}
console.log(input.length - 1 - count);
