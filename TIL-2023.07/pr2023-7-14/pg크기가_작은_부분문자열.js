// 숫자로 이루어진 문자열 t와 p가 주어질 때, t에서 p와 길이가 같은 부분문자열 중에서, 이 부분문자열이 나타내는 수가 p가 나타내는 수보다 작거나 같은 것이 나오는 횟수를 return하는 함수 solution을 완성하세요.
// 예를 들어, t="3141592"이고 p="271" 인 경우, t의 길이가 3인 부분 문자열은 314, 141, 415, 159, 592입니다. 이 문자열이 나타내는 수 중 271보다 작거나 같은 수는 141, 159 2개 입니다.

// 처음 풀이: for문과 slice, replace활용
function solution(t, p) {
  let answer = 0;
  let max = t.length - p.length;
  for (let i = 0; i <= max; i++) {
    if (+t.slice(0, p.length) <= +p) {
      answer += 1;
      t = t.replace(t.slice(0, 1), "");
    } else {
      t = t.replace(t.slice(0, 1), "");
    }
  }
  return answer;
}

// slice를 보다 직관적이고 효율적으로 풀이
function solution(t, p) {
  let answer = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    if (+t.slice(i, i + p.length) <= +p) {
      // p의 길이만끔 짤라서 비교, 원본 훼손 x
      answer += 1;
    }
  }
  return answer;
}
