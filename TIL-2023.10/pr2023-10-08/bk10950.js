const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let answer = '';

for (let i = 1; i < input.length; i++) {
  let solve = input[i].split(' ');
  answer += `${+solve[0] + +solve[1]}\n`;
}

console.log(answer.slice(0, answer.length - 1));
