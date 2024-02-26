import Player from "./components/player";
import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Log from "./components/log";
import { WINNING_COMBINATIONS } from "./components/winning-combination";

const initialGameBord = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function deriveActivePlayer(gameTurns) {
  let currentplayer = "x";
  if (gameTurns.length > 0 && gameTurns[0].Player === "x") {
    currentplayer = "o";
  }
  return currentplayer;
}
function App() {
  const [gameTurns, setGameTurns] = useState([]);
  console.log(gameTurns);
  // console.log(setGameTurns);

  // const [activeplayer, setActivePlayer] = useState("X");
  const activeplayer = deriveActivePlayer(gameTurns);

  let gameBoard = initialGameBord;
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  console.log(gameBoard);
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];
    // console.log(winner);
    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }
  function handelSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((curActiveplayer) => (curActiveplayer === "x" ? "o" : "x"));
    setGameTurns((prevturns) => {
      const currentplayer = deriveActivePlayer(prevturns);
      const updatedturns = [
        { square: { row: rowIndex, col: colIndex }, Player: currentplayer },
        ...prevturns,
      ];
      return updatedturns;
    });
  }
  return (
    <menu>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="player-1"
            Symbol="x"
            isActive={activeplayer === "x"}
          />
          <Player
            initialName="player-2"
            Symbol="o"
            isActive={activeplayer === "o"}
          />
        </ol>
        {winner && <p>you won,{winner}!</p>}
        <GameBoard onSelectctSqure={handelSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </menu>
  );
}

export default App;
