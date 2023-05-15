function minimax(board, depth, maximizingPlayer, alpha, beta, player) {
    if (depth === 0 || isGameOver(board)) {
      return evaluateBoard(board, player);
    }
  
    let bestValue;
  
    if (maximizingPlayer) {
      bestValue = -Infinity;
      for (const move of getValidMoves(board)) {
        const newBoard = applyMove(board, move, player);
        const value = minimax(newBoard, depth - 1, false, alpha, beta, 3 - player);
        bestValue = Math.max(bestValue, value);
        alpha = Math.max(alpha, bestValue);
  
        if (beta <= alpha) {
          break; // Beta cut-off
        }
      }
    } else {
      bestValue = Infinity;
      for (const move of getValidMoves(board)) {
        const newBoard = applyMove(board, move, player);
        const value = minimax(newBoard, depth - 1, true, alpha, beta, 3 - player);
        bestValue = Math.min(bestValue, value);
        beta = Math.min(beta, bestValue);
  
        if (beta <= alpha) {
          break; // Alpha cut-off
        }
      }
    }
  
    return bestValue;
  }