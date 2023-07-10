// 알파벳 소문자로 이루어진 문자열 myString이 주어집니다. 알파벳 순서에서 "l"보다 앞서는 모든 문자를 "l"로 바꾼 문자열을 return 하는 solution 함수를 완성해 주세요.

// 처음 풀이 : 원시적인 배열을 만들어 비교함 - 러닝타임이 너무 길어짐
function solution(myString) {
  let answer = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
  let ans = '';
  for (let i of myString) {
    if (answer.includes(i)) {
      ans += 'l';
    } else {
      ans += i;
    }
  }
  return ans;
}

// 아스키 코드를 활용한 풀이 : 아스키코드를 익혀보기 위해 사용
function solution(myString) {
  let STR = Array(26)
    .fill()
    .map((v, i) => String.fromCharCode(i + 97));
  let answer = '';
  for (let i of myString) {
    if (STR.indexOf(i) < STR.indexOf('l')) {
      answer += 'l';
    } else {
      answer += i;
    }
  }
  return answer;
}

// 정규표현식 : 가장 바람직한 풀이
function solution(myString) {
  return myString.replace(/[a-k]/g, 'l');
}

// 그냥 문자열끼리 비교가능하기도 함
function solution(myString) {
  return [...myString].map(v => (v < 'l' ? 'l' : v)).join('');
}
