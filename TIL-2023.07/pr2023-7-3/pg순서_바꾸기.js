// 정수 리스트 num_list와 정수 n이 주어질 때, num_list를 n 번째 원소 이후의 원소들과 n 번째까지의 원소들로 나눠 n 번째 원소 이후의 원소들을 n 번째까지의 원소들 앞에 붙인 리스트를 return하도록 solution 함수를 완성해주세요.

// 처음 풀이: splice, concat(배열을 합치는 메서드)활용
function solution(num_list, n) {
  return num_list.splice(n).concat(num_list.slice(0, n));
}

// unshift활용 : 훨씬 가독성이 좋고 로딩속도가 빠름
function solution(num_list, n) {
  num_list.unshift(...num_list.splice(n)); // splice로 인덱스n까지의 배열을 가져오고 unshift로 그 요소들을 앞에 붙이고, 그 수만큼 원본베열 뒤의 요소를 없앤다
  return num_list;
}
