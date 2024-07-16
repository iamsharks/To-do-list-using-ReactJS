import React,{useState} from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos]=useState([]);
  const addTodo = (todo)=>{
      setTodos([...todos,todo]);
  };
  const removeTodo =(index)=>{
    setTodos(todos.filter((_,i)=>i !== index));
  };
  return (
    <div className="App">
      <h1>To_Do List</h1>
      <TodoInput addTodo={addTodo}/>
      <TodoList todos ={todos} removeTodo={removeTodo}/>
    </div>
  );
}

export default App;
