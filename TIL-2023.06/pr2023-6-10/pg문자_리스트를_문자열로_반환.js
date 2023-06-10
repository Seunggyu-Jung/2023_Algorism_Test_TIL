// 문자들이 담겨있는 배열 arr가 주어집니다. arr의 원소들을 순서대로 이어 붙인 문자열을 return 하는 solution함수를 작성해 주세요.\

// join메서드 활용
function solution(arr) {
  return arr.join('');
}

// for문 사용
function solution(arr) {
  let answer = '';
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  return answer;
}
