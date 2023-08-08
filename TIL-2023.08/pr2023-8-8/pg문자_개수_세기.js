// 알파벳 대소문자로만 이루어진 문자열 my_string이 주어질 때, my_string에서 'A'의 개수, my_string에서 'B'의 개수,..., my_string에서 'Z'의 개수, my_string에서 'a'의 개수, my_string에서 'b'의 개수,..., my_string에서 'z'의 개수를 순서대로 담은 길이 52의 정수 배열을 return 하는 solution 함수를 작성해 주세요.

// 처음 풀이 : 빈 배열과 알파벳이 적힌 배열을 따로 만들고 파라미터를 전개구문 및 map을 하여 빈 배열에 변화를 줌
function solution(my_string) {
  let answer = Array(52).fill(0);
  const alpha = Array(52)
    .fill()
    .map((_, index) => {
      const charCode = index < 26 ? 65 + index : 97 + index - 26;
      return String.fromCharCode(charCode);
    });
  [...my_string].map((v, _) => (answer[alpha.indexOf(v)] += 1));
  return answer;
}
