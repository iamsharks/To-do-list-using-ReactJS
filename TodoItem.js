import React from "react";

function TodoItem({todo,index,removeTodo}){
    return(
        <li>
            {todo}<button onClick={()=>removeTodo(index)}>Delete</button>
        </li>
    );
}







export default TodoItem;