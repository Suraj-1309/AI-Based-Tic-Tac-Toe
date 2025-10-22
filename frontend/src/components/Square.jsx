export default function Square({ value, onClick, isWinning }) {
  return (
    <button
      onClick={onClick}
      className={`
        w-24 h-24 sm:w-28 sm:h-28 
        flex items-center justify-center
        text-5xl font-extrabold
        border border-white 
        ${isWinning ? "bg-green-700" : "bg-transparent hover:bg-gray-800"} 
        transition-all duration-150
      `}
    >
      <span className={`${value === "X" ? "text-white" : value === "O" ? "text-white" : ""}`}>
        {value}
      </span>
    </button>
  );
}
