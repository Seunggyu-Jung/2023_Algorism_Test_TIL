// 민우가 구매한 로또 번호를 담은 배열 lottos, 당첨 번호를 담은 배열 win_nums가 매개변수로 주어집니다. 이때, 당첨 가능한 최고 순위와 최저 순위를 차례대로 배열에 담아서 return 하도록 solution 함수를 완성해주세요.

function solution(lottos, win_nums) {
  let count = 0;
  let zero = 0;
  let rank = [6, 6, 5, 4, 3, 2, 1];
  for (let i = 0; i < lottos.length; i++) {
    if (win_nums.includes(lottos[i])) {
      count += 1;
    }
    if (lottos[i] === 0) {
      zero += 1;
    }
  }
  return [rank[zero + count], rank[count]];
}
