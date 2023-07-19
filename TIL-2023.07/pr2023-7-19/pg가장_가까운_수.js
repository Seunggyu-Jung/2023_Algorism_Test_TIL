// 문자열 s가 주어졌을 때, s의 각 위치마다 자신보다 앞에 나왔으면서, 자신과 가장 가까운 곳에 있는 같은 글자가 어디 있는지 알고 싶습니다.
// 예를 들어, s="banana"라고 할 때,  각 글자들을 왼쪽부터 오른쪽으로 읽어 나가면서 다음과 같이 진행할 수 있습니다.
// b는 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.
// a는 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.
// n은 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.
// a는 자신보다 두 칸 앞에 a가 있습니다. 이는 2로 표현합니다.
// n도 자신보다 두 칸 앞에 n이 있습니다. 이는 2로 표현합니다.
// a는 자신보다 두 칸, 네 칸 앞에 a가 있습니다. 이 중 가까운 것은 두 칸 앞이고, 이는 2로 표현합니다.
// 따라서 최종 결과물은 [-1, -1, -1, 2, 2, 2]가 됩니다.
// 문자열 s이 주어질 때, 위와 같이 정의된 연산을 수행하는 함수 solution을 완성해주세요.

// 처음 풀이 : 변수를 두 개 만들고 replace로 중복된 요소 제거 - 시간이 심각하게 오래걸림
function solution(s) {
  let answer = [];
  let alpha = [];
  for (let i = 0; i < [...s].length; i++) {
    if (alpha.includes(s[i])) {
      answer.push(i - s.indexOf(s[i]));
      s = s.replace(s[i], " ");
    } else {
      answer.push(-1);
      alpha.push(s[i]);
    }
  }
  return answer;
}

// 가장 효율적인 풀이 : 객체를 사용하여 풀이
function solution(s) {
  let answer = {};
  return [...s].map((v, i) => {
    let result = answer[v] !== undefined ? i - answer[v] : -1;
    answer[v] = i; // key값 : v , value값 : i
    return result;
  });
}

// lastIndexOf(v) : v와 일치하는 가장 마지막 요소의 인덱스를 반환, 없으면 -1을 반환
function solution(s) {
  return [...s].map((v, i) => {
    const result = s.slice(0, i).lastIndexOf(v); // slice로 앞부분만 비교한다.
    return result < 0 ? -1 : i - result;
  });
}
