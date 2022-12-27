import "./Throw2.css"

function Throw2({handleScore, disabled}){
    return(
        <button 
        className="Throw2" 
        onClick={handleScore} 
        disabled={disabled}
         >
            {disabled?"wait for 1 player": "Throw"}
        </button>
    )
}

export default Throw2;