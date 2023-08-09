// 0 이상의 두 정수가 문자열 a, b로 주어질 때, a + b의 값을 문자열로 return 하는 solution 함수를 작성해 주세요.

// chatGPT 답안 : 가장 작은 자릿수부터 더하고 누적하여 구함
function solution(a, b) {
  let carry = 0;
  let result = "";
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    const digitA = i >= 0 ? parseInt(a[i]) : 0;
    const digitB = j >= 0 ? parseInt(b[j]) : 0;

    const sum = digitA + digitB + carry;
    carry = Math.floor(sum / 10);
    result = (sum % 10) + result;

    i--;
    j--;
  }

  return result;
}

// 가장 간단한 답 : BigInt() -> 자바스크립트로 나타낼 수 있는 정수 이상의 정수를 표현할 때 사용
function solution(a, b) {
  return "" + (BigInt(a) + BigInt(b));
}
