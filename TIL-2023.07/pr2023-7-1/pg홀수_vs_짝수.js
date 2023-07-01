// 정수 리스트 num_list가 주어집니다. 가장 첫 번째 원소를 1번 원소라고 할 때, 홀수 번째 원소들의 합과 짝수 번째 원소들의 합 중 큰 값을 return 하도록 solution 함수를 완성해주세요. 두 값이 같을 경우 그 값을 return합니다.

// 처음 풀이 : reduce활용 reduce(누산값, 현재 값, 현재 인덱스)
function solution(num_list) {
  let odd = num_list.reduce((a, v, i) => (i % 2 === 0 ? a + v : a + 0), 0);
  let even = num_list.reduce((a, v, i) => (i % 2 === 1 ? a + v : a + 0), 0);
  return odd >= even ? odd : even;
}

// map 메서드 활용 : 시간 단축 + 가독성 개선
function solution(num_list) {
  let odd = 0;
  let even = 0;

  num_list.map((v, i) => {
    !(i % 2) ? (odd += v) : (even += v);
  });
  return odd >= even ? odd : even;
}
