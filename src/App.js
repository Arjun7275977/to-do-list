import React, { useState } from "react";
import './App.css'
 import TodoInput from "./Component/TodoInput";
 import TodoList from "./Component/TodoList";

  function App(){
    const[list,setList] = useState([ ]);
    let addList = (Inputstate) => {
      if(Inputstate!=='')
      setList([...list,Inputstate]);
    }
    const deleteListItem = (key) =>{
      let newList = [...list];
      newList.splice(key,1)
      setList([...newList])
    }
    return(
       <div className="main-container">
         <div className="Center-container">

           
          <TodoInput addList={addList}/>
          
          <h1 className="app-heading">Todo</h1>
          <hr/>
          {list.map((listItem,i)=>{
            return(
              <TodoList key={i} index={i}item = {listItem} deleteItem={deleteListItem}/>
            )
          })}

          </div>
       </div>
    )
 }
 export default App;