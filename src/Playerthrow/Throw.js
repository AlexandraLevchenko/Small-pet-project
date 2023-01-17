import { useState } from "react";
import "./Throw.css"

function Throw({handleScore, playerToGo}){
  const [isHovered, setIsHovered] = useState(false);
    return(
        <button 
        className={`Throw ${playerToGo === 2 && "Throw2"}`}  
        onClick={handleScore} 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
           {isHovered ? "Throw" : playerToGo === 1 ? "Player1" : "Player2"}
            </button>
    )
}

export default Throw;