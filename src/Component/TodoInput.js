import React, { useState } from "react";
export default function TodoInput (props) {
    const[Inputstate,setInputstate] = useState('');
    
    return(
        <div className="Input-container">
            <input type="text" className="Input-box" placeholder="Add your Task" value={Inputstate} onChange=
              {e=>{
              setInputstate(e.target.value) 
            }}
            
            /> 
            <button className="Button" onClick={()=>{
                props.addList(Inputstate)
                setInputstate("")
            }}>+</button>
           
    

            
        </div>
    )
}