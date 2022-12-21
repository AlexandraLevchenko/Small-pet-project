import "./Playerthrow.css"
import Player1 from "./Player1";
import Throw from "./Throw";

function PlayerThrow() {
    return( 
    <div className="Player">
        {/* <p>Player 1</p> */}
        <Player1/>
        <Throw/>
    </div>
    )
}

export default PlayerThrow;