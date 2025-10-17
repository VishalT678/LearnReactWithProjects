import React from 'react'
import { useState , useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

function AddTodo() {
    const [todoText , setTodoText] = useState("");
    const {addTodo} = useContext(TodoContext);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(todoText.trim() === ""){
            alert("please enter a todo!");
            return;
        }
        addTodo(todoText.trim());
        setTodoText("");
    }

  return (
    <div className="w-full max-w-md mx-auto mb-8">
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Enter your todo..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition"
      >
        Add Todo
      </button>
    </form>
  </div>
  )
}

export default AddTodo
