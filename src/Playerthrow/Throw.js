import "./Throw.css"

function Throw({handleScore, disabled}){
    return(
        <button 
        className="Throw" 
        onClick={handleScore} 
        disabled={disabled}
        >
           {disabled?"wait for 2 player": "Throw"}
            </button>
    )
}

export default Throw;