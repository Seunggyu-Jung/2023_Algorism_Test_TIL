// 문자열 my_string과 정수 k가 주어질 때, my_string을 k번 반복한 문자열을 return 하는 solution 함수를 작성해 주세요.

// for문 활용
function solution(my_string, k) {
  let answer = '';
  for (let i = k; i > 0; i--) {
    answer += my_string;
  }
  return answer;
}

// repeat메서드 활용

function solution(my_string, k) {
  return my_string.repeat(k);
}
