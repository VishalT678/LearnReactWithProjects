import React from 'react'
import { useState , useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

function TodoItem({todo}) {
    const [isEditing , setIsEditing] = useState(false);
    const [editText , setEditText] = useState(todo.text);
    const {toggleTodo , deleteTodo , updateTodo} = useContext(TodoContext);

    const handleEdit = () => {
        if(editText.trim() === ""){
            alert("Todo cannot be empty")
            return;
        }
        updateTodo(todo.id , editText.trim());
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditText(todo.text);
        setIsEditing(false);
    };
    
  return (
    <div className={`flex items-center justify-between p-4 border rounded-lg mb-2 ${
      todo.completed ? 'bg-gray-100' : 'bg-white'
    }`}>
      <div className="flex items-center flex-1">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="mr-3 h-4 w-4 text-blue-600"
        />
        
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="flex-1 px-2 py-1 border border-gray-300 rounded"
            autoFocus
          />
        ) : (
          <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
            {todo.text}
          </span>
        )}
      </div>

      <div className="flex gap-2 ml-4">
        {isEditing ? (
          <>
            <button
              onClick={handleEdit}
              className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm"
            >
                Save
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default TodoItem
