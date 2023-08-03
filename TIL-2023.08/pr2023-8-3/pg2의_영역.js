// 정수 배열 arr가 주어집니다. 배열 안의 2가 모두 포함된 가장 작은 연속된 부분 배열을 return 하는 solution 함수를 완성해 주세요.
// 단, arr에 2가 없는 경우 [-1]을 return 합니다.

// 처음 풀이 - filter를 사용하여 해결
function solution(arr) {
  if (arr.filter((v, _) => v === 2).length >= 2) {
    return arr.slice(arr.indexOf(2), arr.lastIndexOf(2) + 1);
  } else if (arr.filter((v, _) => v === 2).length === 1) {
    return [2];
  } else {
    return [-1];
  }
}

// 모범풀이 - 2가 하나만 있으면 자동으로 한 개만 들어간다
function solution(arr) {
  let start = arr.indexOf(2);
  let end = arr.lastIndexOf(2);
  return start === -1 ? [-1] : arr.slice(start, end + 1);
}
