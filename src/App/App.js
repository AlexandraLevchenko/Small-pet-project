import Board from "../Board/Board";
import Player1 from "../Playerthrow/Player1";
import Throw from "../Playerthrow/Throw";
import "./App.css";
import Field from "../Board/Fields.js/Field";
import Cube from "../Playerthrow/Cube";
import {getRandomNumber } from "../helpers/helper";
import { useEffect, useState, useContext} from "react";
import CubeContext from "../context/cubeContext";
import initialFields from "../Board/Fields.js/FieldsArray";




function App() {
  const [playerToGo, setPlayerToGo] = useState(1);

  const [player1CurrentPosition, setPlayer1CurrentPosition] = useState(0);
  const context = useContext(CubeContext);

  useEffect(() => {
    if (player1CurrentPosition >= 35) {
      alert("Player 1 wins!");
      setPlayer1CurrentPosition(0);
      setPlayer2CurrentPosition(0);
    }
  }, [player1CurrentPosition]);



  const [player2CurrentPosition, setPlayer2CurrentPosition] = useState(0);
  useEffect(() => {
  
      if  (player2CurrentPosition >= 35) {
        alert("Player 2 wins!");
        setPlayer2CurrentPosition(0);
        setPlayer1CurrentPosition(0);
      }
  }, [player2CurrentPosition]);

  const handleScoreNew = (currentPlayer) => {
    
    setPlayerToGo(currentPlayer === 1 ? 2 : 1);
    const random = getRandomNumber();
      context.throwCube(random);
      if (currentPlayer === 1){
        setPlayer1CurrentPosition((currentPosition) => {

          const currentSum = currentPosition + random;
          if (currentSum === 35) {
            return 35;
          }
    
          if (currentSum === 14) {
            return currentSum - 1;
          }
    
          if (currentSum === 24) {
            return currentSum + 2;
          }
    
          return currentSum;
         }
        );
      } else {
        setPlayer2CurrentPosition((currentPosition2) => {
    
          const currentSum = currentPosition2 + random;
          if (currentSum === 35) {
            return 35;
          }
          if (currentSum === 14) {
            return currentSum - 1;
          }
          
          if (currentSum === 24) {
            return currentSum + 2;
          }
    
          return currentSum;
          
        });
      }
  };

  


  return (
    <div className="container">
      <div className="containerPlayer1">
        <Player1 label="Player1" isFirstPlayer={true}/>
        <Cube/>
        <Throw handleScore={() => handleScoreNew(playerToGo)} playerToGo={playerToGo}/>
      </div>

      <Board>
        {initialFields.map((field) => (
          <Field
            id={field.id}
            label={field.label}
            color={field.color}
            key={field.id}
            isActive={field.id === "position" + player1CurrentPosition}
            isActive2={field.id === "position" + player2CurrentPosition}
          />
        ))}
      </Board>

      <div className="containerPlayer2">
        <Player1 label="Player2" isFirstPlayer={false}/>
      </div>
    </div>
  );
}

export default App;
