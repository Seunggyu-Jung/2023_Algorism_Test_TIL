// 문자 "A"와 "B"로 이루어진 문자열 myString과 pat가 주어집니다. myString의 "A"를 "B"로, "B"를 "A"로 바꾼 문자열의 연속하는 부분 문자열 중 pat이 있으면 1을 아니면 0을 return 하는 solution 함수를 완성하세요.

// for문 사용
function solution(myString, pat) {
  let answer = '';
  for (let i = 0; i < myString.length; i++) {
    if (myString[i] === 'A') {
      answer += 'B';
    } else {
      answer += 'A';
    }
  }
  return answer.split(pat).length > 1 ? 1 : 0;
}

// map,join,includes 메서드 사용

function solution(myString, pat) {
  return [...myString]
    .map(el => (el === 'A' ? 'B' : 'A'))
    .join('')
    .includes(pat)
    ? 1
    : 0;
}
