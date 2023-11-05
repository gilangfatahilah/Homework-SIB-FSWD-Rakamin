import * as React from "react";

function Board() {
  const [squares, setSquares] = React.useState(Array(9).fill(null));
  const [nextValue, setNextValue] = React.useState(calculateNextValue(squares));
  const winner = calculateWinner(squares);

  function selectSquare(square) {
    if (squares[square] || winner) {
      return;
    }
    const newSquares = squares.slice();
    newSquares[square] = nextValue;
    setSquares(newSquares);
    setNextValue(calculateNextValue(newSquares));
  }

  function restart() {
    setSquares(Array(9).fill(null));
    setNextValue(calculateNextValue(Array(9).fill(null)));
  }

  function renderSquare(i) {
    return (
      <button
        className="bg-orange-200 hover:bg-orange-300 m-1 w-16 h-16 text-orange-400 font-bold after:absolute"
        onClick={() => selectSquare(i)}
      >
        {squares[i]}
      </button>
    );
  }

  return (
    <div className=" flex flex-col items-center mt-20">
      <h1 className="text-xl font-bold mb-5 text-orange-400">
        STATUS: {calculateStatus(winner, squares, nextValue)}
      </h1>
      <div>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <button
        onClick={restart}
        className="mt-5 py-2 px-5 bg-orange-400 rounded-md font-medium"
      >
        Restart
      </button>
    </div>
  );
}

function Game() {
  return (
    <div>
      <div>
        <Board />
      </div>
    </div>
  );
}

// eslint-disable-next-line no-unused-vars
function calculateStatus(winner, squares, nextValue) {
  return winner
    ? `Winner: ${winner}`
    : squares.every(Boolean)
    ? `Scratch: Cat's game`
    : `Next player: ${nextValue}`;
}

// eslint-disable-next-line no-unused-vars
function calculateNextValue(squares) {
  return squares.filter(Boolean).length % 2 === 0 ? "X" : "O";
}

// eslint-disable-next-line no-unused-vars
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function App() {
  return <Game />;
}

export default App;
