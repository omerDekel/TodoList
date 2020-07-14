import React from 'react';
import AddToList from './Components/AddToList';
import TodoList from './Components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {

  state = { todoList: JSON.parse(localStorage.getItem("todoList")) || [] , inputValue: "" };
  appTitle = "Todo List";

  changeInputValue = (newVal) => {
    this.setState({ inputValue: newVal });
  }

  addToList = (newTodo) => {

    if (newTodo !== "") {
      const newTodoList = [...this.state.todoList];
      newTodoList.push(newTodo);
      this.setState({ todoList: newTodoList });
      localStorage.setItem("todoList", JSON.stringify(newTodoList));
    }
  }

  removeTodo = (todoId) => {
    const newTodoList = [...this.state.todoList].filter((todo)=>{
      return todo.id!==todoId;
    });
    this.setState({ todoList: newTodoList });
    localStorage.setItem("todoList", JSON.stringify(newTodoList));
  }

  render() {
    return (
      <div className="App">
        <div className="appTitle">{this.appTitle}</div>
        <AddToList inputValue={this.state.inputValue} changeInputValue={this.changeInputValue}
          add={this.addToList} />
        <TodoList list={this.state.todoList} removeTodo={this.removeTodo} />
      </div>
    );
  }

}

export default App;
