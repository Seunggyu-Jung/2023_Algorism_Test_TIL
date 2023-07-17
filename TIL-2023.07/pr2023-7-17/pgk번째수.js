// 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.
// 예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면
// array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
// 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
// 2에서 나온 배열의 3번째 숫자는 5입니다.
// 배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// 처음풀이 : 이중 for문과 sort로 풀이 - 가독성은 떨어진다.
function solution(array, commands) {
  let answer = [];
  let hole = [];
  for (let i = 0; i < commands.length; i++) {
    for (let j = commands[i][0] - 1; j < commands[i][1]; j++) {
      hole.push(array[j]);
    }
    hole.sort((a, b) => a - b);
    answer.push(hole[commands[i][2] - 1]);
    hole = [];
  }
  return answer;
}

// slice를 이용하여 가독성을 높임
function solution(array, commands) {
  let answer = [];
  for (let j = 0; j < commands.length; j++) {
    let fArray = array.slice(commands[j][0] - 1, commands[j][1]);
    fArray.sort((a, b) => a - b);
    answer.push(fArray[commands[j][2] - 1]);
  }
  return answer;
}

// 구조분해 할당 - 시간은 좀 더 걸리지만, 가독성이 훨씬 높아진다.
function solution(array, commands) {
  let answer = [];
  for (let j = 0; j < commands.length; j++) {
    const [sNum, fNum, fIndex] = commands[j];
    let fArray = array.slice(sNum - 1, fNum);
    fArray.sort((a, b) => a - b);
    answer.push(fArray[fIndex - 1]);
  }
  return answer;
}
