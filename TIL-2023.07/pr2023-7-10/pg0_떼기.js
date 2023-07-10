// 정수로 이루어진 문자열 n_str이 주어질 때, n_str의 가장 왼쪽에 처음으로 등장하는 0들을 뗀 문자열을 return하도록 solution 함수를 완성해주세요.

// 처음 풀이 : for문과 break, replace활용
function solution(n_str) {
  let answer = '';
  for (let i of [...n_str]) {
    if (i !== '0') {
      break;
    }
    answer += i;
  }
  return n_str.replace(answer, '');
}
