// 문자열 배열 strArr이 주어집니다. strArr의 원소들을 길이가 같은 문자열들끼리 그룹으로 묶었을 때 가장 개수가 많은 그룹의 크기를 return 하는 solution 함수를 완성해 주세요.

// 처음 풀이
function solution(strArr) {
  let leng = strArr.map((v, _) => v.length); // 문자열의 길이가 적힌 배열 생성
  let set = new Set(leng); // 중복제거
  let answer = Array([...set].length).fill(0); // 같은 문자열 길이를 분류할 배열 생성
  for (let i = 0; i < leng.length; i++) {
    for (let j = 0; j < [...set].length; j++) {
      if (leng[i] === [...set][j]) {
        answer[leng[i] - 1] += 1; // 문자열의 길이가 같으면, 분류 배열의 해당 인덱스에 1씩 더함
      }
    }
  }
  return Math.max(...answer);
}

// 모범 답안
function solution(strArr) {
  let answer = Array(31).fill(0); // 문자열은 1개 이상이기 때문에 요소의 갯수는 30이 아닌 31로 작성
  for (let i of strArr) {
    answer[i.length]++;
  }
  return Math.max(...answer);
}
