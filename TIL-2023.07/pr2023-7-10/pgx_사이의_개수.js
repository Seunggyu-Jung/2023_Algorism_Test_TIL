// 문자열 myString이 주어집니다. myString을 문자 "x"를 기준으로 나눴을 때 나눠진 문자열 각각의 길이를 순서대로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

// 처음풀이 : 단순 반복문으로 해결

function solution(myString) {
  let answer = [];
  let num = 0;
  for (let i of myString) {
    if (i !== 'x') {
      num += 1;
    } else {
      answer.push(num);
      num = 0;
    }
  }
  answer.push(num);
  return answer;
}

// split과 map을 활용 : 러닝타임 훨씬 단축
function solution(myString) {
  return myString.split('x').map(v => v.length);
}
