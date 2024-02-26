// import { useState } from "react";

export default function GameBoard({ onSelectctSqure, board }) {
  //   const [gameBoard, setGameBord] = useState(initialGameBord);
  //   function handelSelectedSquare(rowIndex, colIndex) {
  //     setGameBord((prevGameBord) => {
  //       const updateBord = [...prevGameBord.map((innerArray) => [...innerArray])];
  //       updateBord[rowIndex][colIndex] = activePlayerSymbol;
  //       return updateBord;
  //     });
  //     onSelectctSqure();
  //   }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectctSqure(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
