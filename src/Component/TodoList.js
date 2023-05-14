import React from "react";

export default function TodoList(props){
    return(
        <li className="List-item">
            <span className="Icons">
                {props.item}
            <i className="fa-solid fa-trash-can icon-delete"onClick={e=>{
                props.deleteitem(props.index)
            }}></i>
            </span>
        </li>
    )
}