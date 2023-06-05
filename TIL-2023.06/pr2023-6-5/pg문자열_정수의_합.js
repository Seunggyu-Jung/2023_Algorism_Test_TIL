// 한 자리 정수로 이루어진 문자열 num_str이 주어질 때, 각 자리수의 합을 return하도록 solution 함수를 완성해주세요.

// for 문 사용

function solution(num_str) {
  let answer = 0;
  for (let i = 0; i < num_str.length; i++) {
    answer += parseInt(num_str[i]);
  }
  return answer;
}

// split, reduce 사용 => 비추...

function solution(num_str) {
  return num_str.split('').reduce((a, v) => a + parseInt(v), 0);
}
