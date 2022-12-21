import React from 'react'
import "./Field.css"


function Field({id,label,color, isActive, isActive2}) {
    return(
    <div className={`Field ${color} ${isActive?"active":""} ${isActive2?"active2":""}`}>
        {label}

    </div>
   )
}

export default Field