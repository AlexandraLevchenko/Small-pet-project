import {createContext, useState} from "react";


const CubeContext = createContext(
    {number: 0,
    throwCube: () => {}
}
    );
export const CubeContextProvider = (props) => {
    const [number, throwCube] = useState(0);
    return (
        <CubeContext.Provider
          value={{
            number,
            throwCube}}
        >
          {props.children}
        </CubeContext.Provider>
      );  
}

export default CubeContext;