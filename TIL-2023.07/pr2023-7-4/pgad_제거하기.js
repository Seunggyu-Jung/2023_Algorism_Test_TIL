// 문자열 배열 strArr가 주어집니다. 배열 내의 문자열 중 "ad"라는 부분 문자열을 포함하고 있는 모든 문자열을 제거하고 남은 문자열을 순서를 유지하여 배열로 return 하는 solution 함수를 완성해 주세요.

// 처음 풀이 : for문 및 includes 활용
function solution(strArr) {
  let answer = [];
  for (let i of strArr) {
    if (!i.includes('ad')) {
      answer.push(i);
    }
  }
  return answer;
}

// filter, includes활용 : 로딩
function solution(strArr) {
  return strArr.filter(v => !v.includes('ad'));
}
