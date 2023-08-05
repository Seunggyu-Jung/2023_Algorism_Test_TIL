// 2차원 정수 배열 board와 정수 k가 주어집니다.
// i + j <= k를 만족하는 모든 (i, j)에 대한 board[i][j]의 합을 return 하는 solution 함수를 완성해 주세요.

// 모범 풀이 - flatMap: map을 한 번 돌리고, 나온 결과를 1차원 평탄화 시킴
function solution(board, k) {
  return board
    .flatMap((row, i) => row.filter((_, j) => i + j <= k)) // 이차원으로 구성된 요소 중 filter 된 것들을 1차원으로 평탄화 시킴
    .reduce((a, c) => a + c, 0);
}

// 평범한 풀이
function solution(board, k) {
  let answer = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (i + j <= k) {
        answer += board[i][j];
      }
    }
  }
  return answer;
}
