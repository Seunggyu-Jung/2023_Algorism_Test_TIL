// 단어가 공백 한 개로 구분되어 있는 문자열 my_string이 매개변수로 주어질 때, my_string에 나온 단어를 앞에서부터 순서대로 담은 문자열 배열을 return 하는 solution 함수를 작성해 주세요.

// split 메서드 사용

function solution(my_string) {
  return my_string.split(' ');
}

// for문 사용 -> 비효율적

function solution(my_string) {
  let answer = [];
  let i = '';
  for (let j = 0; j < my_string.length; j++) {
    if (my_string[j] !== ' ') {
      i += my_string[j];
    } else if (my_string[j] === ' ') {
      answer.push(i);
      i = '';
    }
  }
  answer.push(i);
  return answer;
}
