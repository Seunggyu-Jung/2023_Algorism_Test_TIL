// 정수 n이 매개변수로 주어질 때, 다음과 같은 n × n 크기의 이차원 배열 arr를 return 하는 solution 함수를 작성해 주세요.
// arr[i][j] (0 ≤ i, j < n)의 값은 i = j라면 1, 아니라면 0입니다.

// 처음 풀이 : 이중 map으로 풀이
function solution(n) {
  let answer = Array(n).fill(Array(n).fill(0)); // 각 행이 Array(n).fill()로 묶여있기 때문에 하나의 행이 변경되면 전부 다같이 변경된다.
  return answer.map((v, i) =>
    v.map((value, index) => (i === index ? 1 : value))
  );
}

// 다른 풀이 : from을 활용 - 차원 배열을 만들때 주로 사용, from(Array(n), 함수: 요소에 적용할 함수)
function solution(n) {
  const answer = Array.from(Array(n), () => Array(n).fill(0)); // 별도의 객체 배열을 생성하기에 특정 배열만 변경이 가능
  for (let i = 0; i < answer.length; i++) {
    answer[i][i] = 1;
  }

  return answer;
}
