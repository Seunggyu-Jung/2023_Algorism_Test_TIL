// 명예의 전당 목록의 점수의 개수 k, 1일부터 마지막 날까지 출연한 가수들의 점수인 score가 주어졌을 때, 매일 발표된 명예의 전당의 최하위 점수를 return하는 solution 함수를 완성해주세요.

// 처음 풀이 : shift와 push로 배열의 요소를 조절하고, sort로 정렬
function solution(k, score) {
  let answer = [];
  let one = [];
  for (let i = 0; i < score.length; i++) {
    if (i < k) {
      one.push(score[i]);
      one.sort((a, b) => a - b);
      answer.push(one[0]);
    } else {
      if (one[0] <= score[i]) {
        one.shift();
        one.push(score[i]);
        one.sort((a, b) => a - b);
        answer.push(one[0]);
      } else {
        answer.push(one[0]);
      }
    }
  }
  return answer;
}
