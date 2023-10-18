// 예전에는 운영체제에서 크로아티아 알파벳을 입력할 수가 없었다. 따라서, 다음과 같이 크로아티아 알파벳을 변경해서 입력했다.
// 예를 들어, ljes=njak은 크로아티아 알파벳 6개(lj, e, š, nj, a, k)로 이루어져 있다. 단어가 주어졌을 때, 몇 개의 크로아티아 알파벳으로 이루어져 있는지 출력한다.
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('');
let count = 0;
let alpha = '';
const croatia = ['s=', 'c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 'z='];

for (let i of input) {
  alpha += i;
  for (let j of croatia) {
    if (alpha.includes(j)) {
      alpha = alpha.replace(j, ' ');
      count += 1;
    }
  }
}
console.log(alpha.trim().split(' ').join('').length + count);
