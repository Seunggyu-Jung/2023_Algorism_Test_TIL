// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

// 처음 풀이 : 이중 for문으로 풀이
function solution(s) {
  let answer = s.split(" ").map((el) => el.split(""));
  for (let i = 0; i < answer.length; i++) {
    for (let j = 0; j < answer[i].length; j++) {
      if (j % 2 === 0) {
        answer[i][j] = answer[i][j].toUpperCase();
      } else {
        answer[i][j] = answer[i][j].toLowerCase();
      }
    }
  }
  return answer.map((el) => el.join("")).join(" ");
}

// 삼항 연산자로 풀기 : 가독성은 떨어지지만, 디버깅 속도가 남다르다
function solution(s) {
  return s
    .split(" ")
    .map((el) =>
      el
        .split("")
        .map((v, i) => (i % 2 === 0 ? v.toUpperCase() : v.toLowerCase()))
        .join("")
    )
    .join(" ");
}
