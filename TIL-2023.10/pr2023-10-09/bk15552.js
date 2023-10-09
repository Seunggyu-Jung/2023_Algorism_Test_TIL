const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let answer = '';

for (let i = 1; i < input.length; i++) {
  let problem = input[i].split(' ').map((v, _) => +v);
  answer += `${problem[0] + problem[1]}\n`;
}

console.log(answer);
