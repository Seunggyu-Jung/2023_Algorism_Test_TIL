// 이석원은 조규현과 백승환에게 상대편 마린(류재명)의 위치를 계산하라는 명령을 내렸다. 조규현과 백승환은 각각 자신의 터렛 위치에서 현재 적까지의 거리를 계산했다.

// 조규현의 좌표
// $(x_1, y_1)$와 백승환의 좌표
// $(x_2, y_2)$가 주어지고, 조규현이 계산한 류재명과의 거리
// $r_1$과 백승환이 계산한 류재명과의 거리
// $r_2$가 주어졌을 때, 류재명이 있을 수 있는 좌표의 수를 출력하는 프로그램을 작성하시오.

const input = require('fs')
  .readFileSync('예제.txt')
  .toString()
  .split('\n')
  .map((v, _) => v.replace('\r', ''));

let answer = '';

for (let i = 1; i < input.length; i++) {
  let item = input[i].split(' ').map((v, _) => +v);
  let distanse = Math.sqrt((item[0] - item[3]) ** 2 + (item[1] - item[4]) ** 2);
  if (distanse === item[2] + item[5]) {
    answer += '1\n';
  } else if (
    item[2] + item[5] > distanse &&
    distanse > Math.abs(item[2] - item[5])
  ) {
    answer += '2\n';
  } else if (Math.abs(item[2] - item[5]) > distanse) {
    answer += '0\n';
  } else {
    answer += '-1\n';
  }
}
console.log(answer.slice(0, -1));
