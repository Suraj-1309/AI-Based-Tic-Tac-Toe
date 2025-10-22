import { useState } from "react";
import Board from "./components/Board";
import { getAIMove } from "./api";

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [winningCombo, setWinningCombo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userWins, setUserWins] = useState(0);
  const [aiWins, setAiWins] = useState(0);
  const [draws, setDraws] = useState(0);

  const WIN_COMBINATIONS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];

  const checkWinner = (board) => {
    for (let combo of WIN_COMBINATIONS) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinningCombo(combo);
        return board[a];
      }
    }
    if (board.every((cell) => cell !== "")) return "draw";
    return null;
  };

  const handleClick = async (index) => {
    if (board[index] !== "" || player !== "X" || winner) return;

    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);

    let result = checkWinner(newBoard);
    if (result) {
      setWinner(result);
      if (result === "X") setUserWins((prev) => prev + 1);
      if (result === "O") setAiWins((prev) => prev + 1);
      if (result === "draw") setDraws((prev) => prev + 1);
      return;
    }

    setPlayer("O");
    setLoading(true);

    const aiMove = await getAIMove(newBoard, "O");
    if (aiMove !== null) newBoard[aiMove] = "O";
    setBoard(newBoard);
    setLoading(false);

    result = checkWinner(newBoard);
    if (result) {
      setWinner(result);
      if (result === "X") setUserWins((prev) => prev + 1);
      if (result === "O") setAiWins((prev) => prev + 1);
      if (result === "draw") setDraws((prev) => prev + 1);
      return;
    }

    setPlayer("X");
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setPlayer("X");
    setWinner(null);
    setWinningCombo(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Hardest Tic Tac Toe of All Time</h1>

      {/* Scoreboard */}
      <div className="flex gap-6 mb-4 text-lg font-semibold">
        <p>😎 You: {userWins}</p>
        <p>🤖 AI: {aiWins}</p>
        <p>🤝 Draws: {draws}</p>
      </div>

      {/* Game Board */}
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
        <Board board={board} handleClick={handleClick} winningCombo={winningCombo} />

        <div className="text-center mt-4">
          {loading && <p className="text-gray-400 animate-pulse">AI is thinking...</p>}
          {winner && winner !== "draw" && <p className="text-lg text-green-400">Winner: {winner}</p>}
          {winner === "draw" && <p className="text-lg text-yellow-400">It's a Draw!</p>}
        </div>

        <button
          onClick={resetGame}
          className="mt-4 w-full px-4 py-2 bg-white text-black font-semibold rounded hover:bg-gray-300 transition"
        >
          Reset Game
        </button>
      </div>
    </div>
  );
}
