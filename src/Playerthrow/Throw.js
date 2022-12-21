import "./Throw.css"

function Throw({handleScore}){
    return(
        <div className="Throw" onClick={handleScore}>Throw</div>
    )
}

export default Throw;