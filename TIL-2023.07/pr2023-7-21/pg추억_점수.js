// 그리워하는 사람의 이름을 담은 문자열 배열 name, 각 사람별 그리움 점수를 담은 정수 배열 yearning, 각 사진에 찍힌 인물의 이름을 담은 이차원 문자열 배열 photo가 매개변수로 주어질 때, 사진들의 추억 점수를 photo에 주어진 순서대로 배열에 담아 return하는 solution 함수를 완성해주세요.

// 처음 풀이 - 이중 for문과 includes로 풀이
function solution(name, yearning, photo) {
  let answer = Array(photo.length).fill(0);
  for (let i = 0; i < photo.length; i++) {
    for (let j = 0; j < photo[i].length; j++) {
      if (name.includes(photo[i][j])) {
        answer[i] += yearning[name.indexOf(photo[i][j])];
      } else {
        answer[i] += 0;
      }
    }
  }
  return answer;
}

// 가장 가독성이 좋은 정답
function solution(name, yearning, photo) {
  return photo.map(
    (v, i) => v.reduce((a, c) => (a += yearning[name.indexOf(c)] ?? 0), 0) // += 로 값 누적시킴 , 논리연산자 ?? 으로 값이 없으면 0을 더함
  );
}
