import React from 'react'
import { TodoContext } from './TodoContext'
import { useState, useEffect } from 'react'

function TodoProvider({ children }) {
  //local storage
  const[todos , setTodos] = useState(()=>{
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos" , JSON.stringify(todos));
  },[todos])

    //Add new todo
    const addTodo = (text) => {
        const newTodo = {
            id: Date.now(),
            text: text,
            completed: false,
            createAt: new Date().toISOString()
        };
        setTodos(prevTodos => [...prevTodos , newTodo]);
    }

    //toggle todo
    const toggleTodo = (id) => {
      setTodos(prevTodos => prevTodos.map(todo => todo.id  === id ? {...todo, completed: !todo.completed} : todo));
    }

    //delete todo 
    const deleteTodo = (id) => {
      setTodos(prevTodos => prevTodos.filter(todo => todo.id != id));
    };

    //update todo text
    const updateTodo = (id , newText) => {
      setTodos(prevTodos =>
        prevTodos.map(todo => todo.id === id ? {...todo, text: newText} : todo)
      )
    }
  return (
    <TodoContext.Provider value={{
      todos,
      addTodo,
      toggleTodo,
      deleteTodo,
      updateTodo
    }}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider
