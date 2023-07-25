// 길이가 같은 두 문자열 str1과 str2가 주어집니다.
// 두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한 번씩 등장하는 문자열을 만들어 return 하는 solution 함수를 완성해 주세요.

// 처음 풀이 - 단순 for문을 활용하여 풀이
function solution(str1, str2) {
  let answer = "";
  for (let i = 0; i < str1.length; i++) {
    answer += str1[i];
    answer += str2[i];
  }
  return answer;
}

// 모범 풀이 : str1 배열에 map을 돌림
function solution(str1, str2) {
  return [...str1].map((v, i) => v + str2[i]).join("");
}
