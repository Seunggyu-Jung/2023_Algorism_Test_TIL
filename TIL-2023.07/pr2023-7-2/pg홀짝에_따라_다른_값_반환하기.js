// 양의 정수 n이 매개변수로 주어질 때, n이 홀수라면 n 이하의 홀수인 모든 양의 정수의 합을 return 하고 n이 짝수라면 n 이하의 짝수인 모든 양의 정수의 제곱의 합을 return 하는 solution 함수를 작성해 주세요.

// 처음 풀이 : Array, map, fill, reduce 활용 : 너무 복잡하고, 가독성이 심하게 떨어짐
function solution(n) {
  return !(n % 2)
    ? Array(n + 1)
        .fill(0)
        .map((_, i) => i)
        .reduce((a, v) => (!(v % 2) ? a + v ** 2 : a + 0), 0)
    : Array(n + 1)
        .fill(0)
        .map((_, i) => i)
        .reduce((a, v) => (!(v % 2) ? a + 0 : a + v), 0);
}

// 반복문 for을 활용한 풀이
function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (!(n % 2)) {
      !(i % 2) ? (answer += i ** 2) : (answer += 0);
    } else {
      !(i % 2) ? (answer += 0) : (answer += i);
    }
  }
  return answer;
}
