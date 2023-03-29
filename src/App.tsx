import React from 'react';
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';

function App() {
  return (
    <>
    <Header headerText='Todo List mit React'></Header>
    <br></br>
   <TodoList></TodoList>
    </>
  );
}

export default App;
