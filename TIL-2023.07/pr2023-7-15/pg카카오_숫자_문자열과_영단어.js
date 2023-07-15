// 다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.
// 1478 → "one4seveneight"
// 234567 → "23four5six7"
// 10203 → "1zerotwozero3"
// 이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

// 처음 풀이: 단순 배열을 만들어 for문, includes, indexOf로 풀이 - 다소 시간이 오래 걸림
function solution(s) {
  let answer = "";
  let word = "";
  let Kakao = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= 0) {
      answer += s[i];
    } else {
      word += s[i];
      if (Kakao.includes(word)) {
        answer += Kakao.indexOf(word);
        word = "";
      }
    }
  }
  return +answer;
}

// split과 join을 활용하여 영문숫자가 포함되어 있으면, 그 부분을 쪼개어서 그 빈 자리에 숫자를 넣는다.
function solution(s) {
  let answer = s;
  let Kakao = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  for (let i = 0; i < Kakao.length; i++) {
    let arr = answer.split(Kakao[i]);
    answer = arr.join(i); // split으로 빠진 곳에 해당 숫자를 집어 넣는다.
  }
  return +answer;
}

// 정규표현식 : replace와 함께 사용
function solution(s) {
  return +s
    .replace(/zero/g, 0)
    .replace(/one/g, 1)
    .replace(/two/g, 2)
    .replace(/three/g, 3)
    .replace(/four/g, 4)
    .replace(/five/g, 5)
    .replace(/six/g, 6)
    .replace(/seven/g, 7)
    .replace(/eight/g, 8)
    .replace(/nine/g, 9);
}
