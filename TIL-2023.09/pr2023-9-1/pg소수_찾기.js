// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.
// 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
// (1은 소수가 아닙니다.)

// 가장 평범한 풀이
function solution(n) {
  let answer = 1;
  for (let i = 3; i <= n; i += 2) {
    let isPrime = true;
    for (let j = 3; j * j <= i; j += 2) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      answer++;
    }
  }
  return answer;
}

// 에라토스테네스의 체로 해결한 코드
function solution(n) {
  let answer = Array(n)
    .fill(1)
    .map((v, i) => v + i);
  for (let i = 2; i < Math.sqrt(n); i++) {
    for (let j = i * 2; j <= answer.length; j += i) {
      if (answer[j - 1] % i === 0) {
        answer[j - 1] = 0;
      }
    }
  }
  return answer.filter((v) => v !== 0).length - 1;
}
