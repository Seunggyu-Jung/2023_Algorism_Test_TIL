// 문자열 my_string과 target이 매개변수로 주어질 때, target이 문자열 my_string의 부분 문자열이라면 1을, 아니라면 0을 return 하는 solution 함수를 작성해 주세요.

// includes 메서드를 사용

function solution(my_string, target) {
  return my_string.includes(target) ? 1 : 0;
}
