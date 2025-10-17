import React from 'react'
import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import TodoItem from './TodoItem'

function TodoList() {
  const { todos } = useContext(TodoContext);

  if (todos.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-8">
        <p>No todos yet. Add one above!</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Your Todos ({todos.length})</h2>
      <div className="space-y-2">
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default TodoList
