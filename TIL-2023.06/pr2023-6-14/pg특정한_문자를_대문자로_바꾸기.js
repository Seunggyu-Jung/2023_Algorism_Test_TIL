// 영소문자로 이루어진 문자열 my_string과 영소문자 1글자로 이루어진 문자열 alp가 매개변수로 주어질 때, my_string에서 alp에 해당하는 모든 글자를 대문자로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.

// map, join 메서드 활용
function solution(my_string, alp) {
  return [...my_string].map(el => (el === alp ? alp.toUpperCase() : el)).join('');
}

// for of 문 활용
function solution(my_string, alp) {
  let answer = '';
  for (let i of [...my_string]) {
    if (i === alp) {
      answer += alp.toUpperCase();
    } else {
      answer += i;
    }
  }
  return answer;
}
