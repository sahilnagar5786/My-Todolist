import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Todos from './Components/Todos';
import React, { useState, useEffect } from 'react';
import AddTodo from './Components/AddTodo';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    // Deleting this way in react does not Work.
    // let index = todo.indexof(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    
    const myTodo = {
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);

    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const [todos, setTodos] = useState(initTodo);
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return ( 
    <>
      <Navbar/>
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
