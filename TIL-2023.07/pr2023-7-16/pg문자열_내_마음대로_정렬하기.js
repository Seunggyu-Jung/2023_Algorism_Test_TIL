// 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

// 내 풀이 : 오답
function solution(strings, n) {
  let answer = [strings[0]];
  for (let i = 1; i < strings.length; i++) {
    if (answer[0][n] > strings[i][n]) {
      answer.unshift(strings[i]);
    } else {
      if (answer[0][n] === strings[i][n] && answer[0] > strings[i]) {
        answer.unshift(strings[i]);
      } else {
        answer.push(strings[i]); // 특정 요소 뒤에 붙이는 메서드가 없기에 해당 코드는 실행시킬 수 없다.
      }
    }
  }
  return answer;
}

// chatGPT 정답: a.localeCompare(b) - a와 b를 기준으로 문자열을 비교해주는 메서드로 첫번째 문자열이 크면 양수를, 작으면 음수를 반환하여 sort와 함께 사용된다.
function solution(strings, n) {
  return strings.sort((a, b) =>
    a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n])
  );
}
