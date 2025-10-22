import Square from "./Square";

export default function Board({ board, handleClick, winningCombo }) {
  return (
    <div className="grid grid-cols-3">
      {board.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => handleClick(index)}
          isWinning={winningCombo?.includes(index)}
        />
      ))}
    </div>
  );
}
