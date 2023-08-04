// 문자열 myString과 pat이 주어집니다. myString에서 pat이 등장하는 횟수를 return 하는 solution 함수를 완성해 주세요.

function solution(myString, pat) {
  let count = 0;
  const patLength = pat.length;

  for (let i = 0; i <= myString.length - patLength; i++) {
    if (myString.substring(i, i + patLength) === pat) {
      count++;
    }
  }

  return count;
}
