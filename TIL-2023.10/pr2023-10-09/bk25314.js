const input = require('fs').readFileSync('/dev/stdin').toString();

let answer = '';

for (let i = 0; i < +input / 4; i++) {
  answer += 'long ';
}

answer += 'int';

console.log(answer);
