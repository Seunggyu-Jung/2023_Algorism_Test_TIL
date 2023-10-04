// 점의 좌표를 입력받아 그 점이 어느 사분면에 속하는지 알아내는 프로그램을 작성하시오. 단, x좌표와 y좌표는 모두 양수나 음수라고 가정한다.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  input = input.map((item) => +item);
  solution(input[0], input[1]);
  process.exit();
});

function solution(x, y) {
  let ans = 0;
  if (x > 0 && y > 0) {
    ans = 1;
  }
  if (x < 0 && y > 0) {
    ans = 2;
  }
  if (x < 0 && y < 0) {
    ans = 3;
  }
  if (x > 0 && y < 0) {
    ans = 4;
  }
  console.log(ans);
}
