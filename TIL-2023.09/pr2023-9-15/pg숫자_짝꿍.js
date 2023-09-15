// 두 정수 X, Y의 임의의 자리에서 공통으로 나타나는 정수 k(0 ≤ k ≤ 9)들을 이용하여 만들 수 있는 가장 큰 정수를 두 수의 짝꿍이라 합니다(단, 공통으로 나타나는 정수 중 서로 짝지을 수 있는 숫자만 사용합니다). X, Y의 짝꿍이 존재하지 않으면, 짝꿍은 -1입니다. X, Y의 짝꿍이 0으로만 구성되어 있다면, 짝꿍은 0입니다.
// 예를 들어, X = 3403이고 Y = 13203이라면, X와 Y의 짝꿍은 X와 Y에서 공통으로 나타나는 3, 0, 3으로 만들 수 있는 가장 큰 정수인 330입니다. 다른 예시로 X = 5525이고 Y = 1255이면 X와 Y의 짝꿍은 X와 Y에서 공통으로 나타나는 2, 5, 5로 만들 수 있는 가장 큰 정수인 552입니다(X에는 5가 3개, Y에는 5가 2개 나타나므로 남는 5 한 개는 짝 지을 수 없습니다.)
// 두 정수 X, Y가 주어졌을 때, X, Y의 짝꿍을 return하는 solution 함수를 완성해주세요.

// 가능한 풀이 : 테스트 케이스는 통과하지만, 정답 제출시 문자열이 상당히 길어지면 시간 초과 오류 발생
function solution(X, Y) {
  let answer = [];
  let minimum = X.length >= Y.length ? Y : X;
  let maximum = minimum === X ? Y : X;
  for (let i of minimum) {
    if (maximum.includes(i)) {
      answer.push(+i);
      maximum = maximum.replace(i, '');
    }
  }
  return answer.length === 0
    ? '-1'
    : answer.filter((v, _) => v !== 0).length === 0
    ? '0'
    : answer.sort((a, b) => b - a).join('');
}

// 시간 초과를 피한 정답 : 숫자 0 ~ 9 까지 파라미터의 문자열끼리 비교해가며 더 적게 나온 갯수 만큼 정답에 더함
function solution(X, Y) {
  let answer = '';
  X = [...X];
  Y = [...Y];
  for (let i = 0; i < 10; i++) {
    const countX = X.filter((v, _) => +v === i).length;
    const countY = Y.filter((v, _) => +v === i).length;
    answer += String(i).repeat(Math.min(countX, countY));
  }
  if (answer === '') return '-1';
  if (+answer === 0) return '0';
  return answer
    .split('')
    .sort((a, b) => b - a)
    .join('');
}
