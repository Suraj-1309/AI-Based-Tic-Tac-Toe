WIN_COMBINATIONS = [
    (0, 1, 2), (3, 4, 5), (6, 7, 8),  # rows
    (0, 3, 6), (1, 4, 7), (2, 5, 8),  # columns
    (0, 4, 8), (2, 4, 6)              # diagonals
]

def check_winner(board):
    for a, b, c in WIN_COMBINATIONS:
        if board[a] and board[a] == board[b] == board[c]:
            return board[a]
    if all(cell != "" for cell in board):
        return "draw"
    return None

def minimax(board, is_max_turn, ai_player, alpha=-999, beta=999, depth=0):
    opponent = "O" if ai_player == "X" else "X"
    result = check_winner(board)

    if result == ai_player:
        return 10 - depth, None
    elif result == opponent:
        return depth - 10, None
    elif result == "draw":
        return 0, None

    best_move = None

    if is_max_turn:
        best_score = -999
        for i in range(9):
            if board[i] == "":
                board[i] = ai_player
                score, _ = minimax(board, False, ai_player, alpha, beta, depth + 1)
                board[i] = ""
                if score > best_score:
                    best_score = score
                    best_move = i
                alpha = max(alpha, best_score)
                if beta <= alpha:  # prune
                    break
        return best_score, best_move
    else:
        best_score = 999
        for i in range(9):
            if board[i] == "":
                board[i] = opponent
                score, _ = minimax(board, True, ai_player, alpha, beta, depth + 1)
                board[i] = ""
                if score < best_score:
                    best_score = score
                    best_move = i
                beta = min(beta, best_score)
                if beta <= alpha:  # prune
                    break
        return best_score, best_move

def get_best_move(board, ai_player="O"):
    _, move = minimax(board, True, ai_player)
    return move
