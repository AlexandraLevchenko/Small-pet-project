import Board from "../Board/Board";
import Player1 from "../Playerthrow/Player1";
import Throw from "../Playerthrow/Throw";
import "./App.css";
import Player2 from "../Playerthrow2/Player2";
import Throw2 from "../Playerthrow2/Throw2";
import Field from "../Board/Fields.js/Field";
import { getScore, getRandomNumber } from "../helpers/helper";
import { useEffect, useState } from "react";

const initialFields = [
  {
    id: "position0",
    label: "start",
    color: "blue",
  },
  {
    id: "position1",
    label: "2",
    color: "default",
  },
  {
    id: "position2",
    label: "3",
    color: "default",
  },
  {
    id: "position3",
    label: "4",
    color: "default",
  },
  {
    id: "position4",
    label: "5",
    color: "default",
  },
  {
    id: "position5",
    label: "6",
    color: "default",
  },
  {
    id: "position6",
    label: "7",
    color: "default",
  },
  {
    id: "position7",
    label: "8",
    color: "default",
  },
  {
    id: "position8",
    label: "9",
    color: "default",
  },
  {
    id: "position9",
    label: "10",
    color: "default",
  },
  {
    id: "position10",
    label: "11",
    color: "default",
  },
  {
    id: "position11",
    label: "12",
    color: "default",
  },
  {
    id: "position12",
    label: "13",
    color: "default",
  },
  {
    id: "position13",
    label: "14",
    color: "default",
  },
  {
    id: "position14",
    label: "15",
    color: "default",
  },
  {
    id: "position15",
    label: "16",
    color: "default",
  },
  {
    id: "position16",
    label: "17",
    color: "default",
  },
  {
    id: "position17",
    label: "18",
    color: "default",
  },
  {
    id: "position18",
    label: "19",
    color: "default",
  },
  {
    id: "position19",
    label: "20",
    color: "default",
  },
  {
    id: "position20",
    label: "21",
    color: "default",
  },
  {
    id: "position21",
    label: "22",
    color: "default",
  },
  {
    id: "position22",
    label: "23",
    color: "default",
  },
  {
    id: "position23",
    label: "24",
    color: "default",
  },
  {
    id: "position24",
    label: "25",
    color: "default",
  },
  {
    id: "position25",
    label: "26",
    color: "default",
  },
  {
    id: "position26",
    label: "27",
    color: "default",
  },
  {
    id: "position27",
    label: "28",
    color: "default",
  },
  {
    id: "position28",
    label: "29",
    color: "default",
  },
  {
    id: "position29",
    label: "30",
    color: "default",
  },
  {
    id: "position30",
    label: "31",
    color: "default",
  },
  {
    id: "position31",
    label: "32",
    color: "default",
  },
  {
    id: "position32",
    label: "33",
    color: "default",
  },
  {
    id: "position33",
    label: "34",
    color: "default",
  },
  {
    id: "position34",
    label: "35",
    color: "default",
  },
  {
    id: "position35",
    label: "finish",
    color: "red",
  },
];

function App() {
  const [player1CurrentPosition, setPlayer1CurrentPosition] = useState(0);
  useEffect(() => {
    if (player1CurrentPosition >= 35) {
      alert("Player 1 win!");
    }
  }, [player1CurrentPosition]);

  const [player2CurrentPosition, setPlayer2CurrentPosition] = useState(0);
  useEffect(() => {
    if (player2CurrentPosition >= 35) {
      alert("Player 2 win!");
    }
  }, [player2CurrentPosition]);

  const handleScoreNew = () => {
    setPlayer1CurrentPosition((currentPosition) => {
      console.log("ONE", currentPosition);
      // if (currentPosition > 35) {
      //   return 0;
      // }
      console.log("TWO", currentPosition);
      // alert(getRandomNumber(1,6))
      const currentSum = currentPosition + getRandomNumber();
      if (currentSum === 35) {
        return 35;
      }
      if (currentSum > 35) {
        return 0;
      }
      return currentSum;
    });
  };

  const handleScoreNew2 = () => {
    setPlayer2CurrentPosition((currentPosition2) => {
      console.log("ONEONE", currentPosition2);
      console.log("TWOTWO", currentPosition2);
      const currentSum = currentPosition2 + getRandomNumber();
      if (currentSum === 35) {
        return 35;
      }
      if (currentSum > 35) {
        return 0;
      }
      return currentSum;
    });
  };

  return (
    <div className="container">
      <div className="containerPlayer1">
        <Player1 />
        <Throw handleScore={handleScoreNew} />
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
        <Player2 />
        <Throw2 handleScore={handleScoreNew2} />
      </div>
    </div>
  );
}

export default App;
