// 가로, 세로의 크기가 각각 100인 정사각형 모양의 흰색 도화지가 있다. 이 도화지 위에 가로, 세로의 크기가 각각 10인 정사각형 모양의 검은색 색종이를 색종이의 변과 도화지의 변이 평행하도록 붙인다. 이러한 방식으로 색종이를 한 장 또는 여러 장 붙인 후 색종이가 붙은 검은 영역의 넓이를 구하는 프로그램을 작성하시오.
const ein = require('fs')
  .readFileSync('예제.txt')
  .toString()
  .trim()
  .split('\n')
  .map((v, _) =>
    v
      .replace('\r', '')
      .split(' ')
      .map((v, _) => +v)
  );

let answer = 0;

for (let i = 1; i < ein.length - 1; i++) {
  for (let j = i + 1; j < ein.length; j++) {
    if (
      Math.abs(ein[i][0] - ein[j][0]) < 10 &&
      Math.abs(ein[i][1] - ein[j][1]) < 10
    ) {
      answer +=
        (10 - Math.abs(ein[i][0] - ein[j][0])) *
        (10 - Math.abs(ein[i][1] - ein[j][1]));
    }
  }
}

console.log(100 * ein[0][0] - answer);
