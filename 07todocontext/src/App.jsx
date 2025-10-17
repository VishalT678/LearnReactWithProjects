import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoProvider from "./context/TodoProvider";
import TodoList from "./components/TodoList";

function App() {
  return (
    <TodoProvider>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center">
        <AddTodo />
        
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;