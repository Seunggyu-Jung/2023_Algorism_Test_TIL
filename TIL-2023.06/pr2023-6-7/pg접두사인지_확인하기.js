// 문자열 my_string과 is_prefix가 주어질 때, is_prefix가 my_string의 접두사라면 1을, 아니면 0을 return 하는 solution 함수를 작성해 주세요.

// for문을 통한 풀이
function solution(my_string, is_prefix) {
  let answer = '';
  for (let i = 0; i < my_string.length; i++) {
    if (answer === is_prefix) {
      return 1;
    } else {
      answer += my_string[i];
    }
  }
  return 0;
}
