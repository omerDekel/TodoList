import React from 'react';
import Button from 'react-bootstrap/Button';
import './TodoList.css';

function TodoList(props){

     const list = props.list.map((todo,index)=>{
         return(
             <li id={todo.id} key={index+1}>
                <div className="todo">
                <p className="todoText">{todo.text}</p>
                <Button className="removeButton" variant="danger" onClick={()=>props.removeTodo(todo.id)}>Remove</Button>
                </div>
             </li>
         );
     })  

    return(
        <ol className="todoList">
            {list}
        </ol>
    );
}


export default TodoList;