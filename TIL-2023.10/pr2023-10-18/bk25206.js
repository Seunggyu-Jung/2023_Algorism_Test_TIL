// 인하대학교 컴퓨터공학과를 졸업하기 위해서는, 전공평점이 3.3 이상이거나 졸업고사를 통과해야 한다. 그런데 아뿔싸, 치훈이는 깜빡하고 졸업고사를 응시하지 않았다는 사실을 깨달았다!
// 치훈이의 전공평점을 계산해주는 프로그램을 작성해보자.
// 전공평점은 전공과목별 (학점 × 과목평점)의 합을 학점의 총합으로 나눈 값이다.

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((v, _) => v.replace('\r', ''))
  .map((v, _) => v.split(' '));

const grade = ['A+', 'A0', 'B+', 'B0', 'C+', 'C0', 'D+', 'D0', 'F'];
const score = [4.5, 4.0, 3.5, 3.0, 2.5, 2.0, 1.5, 1.0, 0];
let answer = 0;
let count = 0;

for (let i of input) {
  if (grade.includes(i[2])) {
    answer += +i[1] * score[grade.indexOf(i[2])];
    count += +i[1];
  }
}

console.log(answer / count);
