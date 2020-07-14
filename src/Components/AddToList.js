import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './AddToList.css';



function AddToList(props){

    const inputRef = React.createRef();
    const buttonRef = React.createRef();

    const inputOnKeyDown = (event)=>{
        if(event.keyCode===13){
            buttonRef.current.click();
        }
    }

    const addTodo = ()=>{
        const id = Math.random().toString(32).split(".").pop();
        const text = inputRef.current.value;
        props.add({id,text});
        props.changeInputValue("");
    }

    return(
        <div className="addToList">
            <Form.Control placeholder="Insert todo" type="text" ref={inputRef} value={props.inputValue} 
            onChange={() => props.changeInputValue(inputRef.current.value)} onKeyDown={inputOnKeyDown}/>
            <Button ref={buttonRef} className="addButton" onClick={addTodo}>Add</Button>
        </div>
    );
}


export default AddToList;
