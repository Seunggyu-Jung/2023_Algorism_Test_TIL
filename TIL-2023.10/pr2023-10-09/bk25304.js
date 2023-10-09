const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let answer = 0;

for (let i = 2; i < input.length; i++) {
  let menu = input[i].split(' ').map((v, _) => +v);
  answer += menu[0] * menu[1];
}

if (answer === +input[0]) {
  console.log('Yes');
} else {
  console.log('No');
}
