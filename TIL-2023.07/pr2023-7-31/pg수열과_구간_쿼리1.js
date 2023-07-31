// 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. queries의 원소는 각각 하나의 query를 나타내며, [s, e] 꼴입니다.
// 각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 arr[i]에 1을 더합니다.
// 위 규칙에 따라 queries를 처리한 이후의 arr를 return 하는 solution 함수를 완성해 주세요.

// 처음 풀이 : 이중 for문을 통한 풀이
function solution(arr, queries) {
  for (let i of queries) {
    for (let j = i[0]; j <= i[1]; j++) {
      arr[j] += 1;
    }
  }
  return arr;
}

// queries를 map으로 순회하고 while을 이용하여 arr 요소 변경
function solution(arr, queries) {
  queries.map(([s, e]) => {
    while (s <= e) arr[s++]++; // while문의 범위만큼 arr[s++]의 인덱스 증가
  });
  return arr;
}
