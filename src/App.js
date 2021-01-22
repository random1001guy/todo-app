import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
//importing components
import Form from './components/Form';
import TodoList from './components/TodoList';  

const App = () => {
  
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');

  const getFromLocal = () => {
    let localTodos = JSON.parse(localStorage.getItem('todos'));
    if(localTodos !== null){
      setTodos(localTodos);
    }
  }

  const saveToLocal = useCallback( () => {
    //console.log(todos);
    localStorage.setItem('todos',JSON.stringify(todos)); 
  },[todos]);

  useEffect( () => {  //run once to get todos from local if present
    getFromLocal();
  },[]);  

  useEffect( () => {
    saveToLocal();
  },[todos, saveToLocal]);

  return (
    <div className="App">
      <header>
        <h1>Orange's Todo List</h1>
      </header>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} setStatus={setStatus} />
      <TodoList todos={todos} setTodos={setTodos} status={status} />
      <div className="footer">
          <p>Made by     
              <a href="https://github.com/random1001guy" rel="noreferrer" target="_blank"> random1001guy</a>
          </p>
      </div>
    </div>
  );
};

export default App;
