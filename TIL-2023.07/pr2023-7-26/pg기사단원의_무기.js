// 숫자나라 기사단의 각 기사에게는 1번부터 number까지 번호가 지정되어 있습니다. 기사들은 무기점에서 무기를 구매하려고 합니다.
// 각 기사는 자신의 기사 번호의 약수 개수에 해당하는 공격력을 가진 무기를 구매하려 합니다. 단, 이웃나라와의 협약에 의해 공격력의 제한수치를 정하고, 제한수치보다 큰 공격력을 가진 무기를 구매해야 하는 기사는 협약기관에서 정한 공격력을 가지는 무기를 구매해야 합니다.
// 예를 들어, 15번으로 지정된 기사단원은 15의 약수가 1, 3, 5, 15로 4개 이므로, 공격력이 4인 무기를 구매합니다. 만약, 이웃나라와의 협약으로 정해진 공격력의 제한수치가 3이고 제한수치를 초과한 기사가 사용할 무기의 공격력이 2라면, 15번으로 지정된 기사단원은 무기점에서 공격력이 2인 무기를 구매합니다. 무기를 만들 때, 무기의 공격력 1당 1kg의 철이 필요합니다. 그래서 무기점에서 무기를 모두 만들기 위해 필요한 철의 무게를 미리 계산하려 합니다.
// 기사단원의 수를 나타내는 정수 number와 이웃나라와 협약으로 정해진 공격력의 제한수치를 나타내는 정수 limit와 제한수치를 초과한 기사가 사용할 무기의 공격력을 나타내는 정수 power가 주어졌을 때, 무기점의 주인이 무기를 모두 만들기 위해 필요한 철의 무게를 return 하는 solution 함수를 완성하시오.

// 처음 풀이 : 풀리기는 하지만 시간이 너무 지체가 되어 통과하지 못함
function solution(number, limit, power) {
  let answer = Array(number).fill(1);
  for (let i = 1; i < number + 1; i++) {
    for (let j = 2; j < i + 1; j++) {
      if (i % j === 0) {
        answer[i - 1] += 1;
      }
    }
  }
  return answer
    .map((v, i) => (v > limit ? power : v))
    .reduce((a, c) => a + c, 0);
}

// chatGPT가 제시한 정답 : 제곱근을 통해 시간 단축 - 약수인 요소를 전부 다 찾는 것보다 훨씬 더 효과적임
function solution(number, limit, power) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    let divide = 0;
    for (let j = 1; j * j <= i; j++) {
      if (i % j === 0) {
        divide += 1;
        if (i / j !== j) {
          // 중복되는 요소 제거
          divide += 1;
        }
      }
    }
    answer += divide > limit ? power : divide;
  }
  return answer;
}
