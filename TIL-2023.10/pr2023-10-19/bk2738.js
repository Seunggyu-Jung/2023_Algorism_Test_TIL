// N*M크기의 두 행렬 A와 B가 주어졌을 때, 두 행렬을 더하는 프로그램을 작성하시오.

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((x) =>
    x
      .trim()
      .split(' ')
      .map((x) => +x)
  );

let answer = [];
let middle = [];

for (let i = 1; i < input[0][1] + 1; i++) {
  for (let j = 0; j < input[0][0]; j++) {
    middle.push(input[i][j] + input[i + input[0][1]][j]);
  }
  answer.push(middle);
  middle = [];
}

console.log(answer.map((v, _) => v.join(' ')).join('\n'));

// 사실상 위에 것도 맞음

const fs = require('fs');
const iD = fs
  .readFileSync('예제.txt')
  .toString()
  .trim()
  .split('\n')
  .map((x) =>
    x
      .trim()
      .split(' ')
      .map((x) => +x)
  );

let N = iD[0][0];
let M = iD[0][1];
let A = [];
let B = [];
for (let i = 1; i <= iD.length; i++) {
  if (i <= N) {
    A.push(iD[i]);
  } else {
    B.push(iD[i]);
  }
}
let arr = [];
for (let i = 0; i < A.length; i++) {
  arr.push(A[i].map((x, y) => A[i][y] + B[i][y]));
}
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i].join(' '));
}
