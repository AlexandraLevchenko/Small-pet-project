import "./Cube.css"
import "../context/cubeContext"
import { useContext } from "react";
import CubeContext from "../context/cubeContext";

function Cube(){
    const context = useContext(CubeContext);
    return(
        <div 
            className="Cube"
        >
            {context.number ? context.number:null}
        </div>
    )
}

export default Cube
