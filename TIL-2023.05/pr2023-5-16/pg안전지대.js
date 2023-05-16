function solution(board) {
    const dx = [1, 0, -1, 0, 1, 1, -1, -1];
      const dy = [0, 1, 0, -1, 1, -1, 1, -1];
    
      const n = board.length;
    
      let answer = n * n;
    
      const ch = [];
    
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          if (board[i][j] === 1) {
            ch.push([i, j]);
            answer--;
          }
        }
      }
    
      if (answer === 0) return 0;
    
      ch.forEach((w) => {
        for (let k = 0; k < 8; k++) {
          const nx = w[0] + dx[k];
          const ny = w[1] + dy[k];
    
          if (nx >= 0 && ny >= 0 && nx < n && ny < n && board[nx][ny] === 0) {
            board[nx][ny] = 1;
            answer--;
          }
        }
      });
    
      return answer;
    }