// 2019 카카오 개발자 겨울 인턴십

// 내 풀이
function solution(board, moves) {
  let answer = 0;
  let pickup = [];
  for (let i of moves) {
    for (let j of board) {
      if (j[i - 1] !== 0) {
        pickup.push(j[i - 1]);
        j[i - 1] = 0;
        break;
      }
    }

    if (
      pickup.length > 1 &&
      pickup[pickup.length - 1] === pickup[pickup.length - 2]
    ) {
      answer += 2;
      pickup = pickup.slice(0, pickup.length - 2);
    }
  }
  return answer;
}

// GPT 정답
function solution(board, moves) {
  let answer = 0;
  let pickup = [];

  for (let move of moves) {
    const colIdx = move - 1;
    let doll = 0;

    for (let i = 0; i < board.length; i++) {
      if (board[i][colIdx] !== 0) {
        doll = board[i][colIdx];
        board[i][colIdx] = 0;
        break;
      }
    }

    if (doll === 0) {
      continue;
    }

    if (pickup.length > 0 && pickup[pickup.length - 1] === doll) {
      answer += 2;
      pickup.pop();
    } else {
      pickup.push(doll);
    }
  }

  return answer;
}
