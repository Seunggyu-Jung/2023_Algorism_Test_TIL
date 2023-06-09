// 정수 리스트 num_list가 주어질 때, 마지막 원소가 그전 원소보다 크면 마지막 원소에서 그전 원소를 뺀 값을 마지막 원소가 그전 원소보다 크지 않다면 마지막 원소를 두 배한 값을 추가하여 return하도록 solution 함수를 완성해주세요.

// 단순 if문 사용
function solution(num_list) {
  if (num_list[num_list.length - 1] > num_list[num_list.length - 2]) {
    num_list.push(num_list[num_list.length - 1] - num_list[num_list.length - 2]);
  } else {
    num_list.push(num_list[num_list.length - 1] * 2);
  }
  return num_list;
}

// 구조 분해 할당으로 풀이 + 깊은 복사 응용
function solution(num_list) {
  const [a, b] = [...num_list].reverse(); // 전개구문을 통해 깊은 복사를 진행한다.
  return a > b ? [...num_list, a - b] : [...num_list, a * 2];
}
