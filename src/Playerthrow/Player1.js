import "./Player1.css"

function Player1({label, isFirstPlayer}){
    return(
        <div className={isFirstPlayer? `Player1` : `Player2`}>
         <p>{label}</p>
        </div>
       
    )
}

export default Player1;