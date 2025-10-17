import { createSlice } from "@reduxjs/toolkit";
const generateId = () => Date.now() + Math.random();

//inital state
const initialState = {
    todos:[],
    filter: {
        status: "all",
        search: ''
    }
};

//create slice
const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducer: {
        //add new todo
        addTodo: (state , action) => {
            const newTodo = {
                id: generateId(),
                text: action.payload.trim(),
                completed: false,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };
            state.todos.unshift(newTodo);
        },
        //toggle Todo complition
        toggleTodo:(state , action)=>{
             state.todos = state.todos.filter(todo=>todo.id !== action.payload);
        },
        //Delete TOdo
        deleteTodo: (state , action )=>{
            state.todos = state.todos.filter(todo=>todo.id!==action.payload);
        },
        //edit todo text
        editTodo: (state , action) => {
            const { id, text } = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            if(todo){
                todo.text = text.trim();
                todo.updatedAt = new Date().toISOString();
            }
        },
        //set Filtter status
        setFilterStatus: (state , action) => {
            state.filters.status = action.payload;
        },

        //set search Quary
        setSearchQuary: (state , action)=>{
            state.filters.search = action.payload;
        },

        //clear Complete Todos
        clearCompleted: (state) => {
            state.todos = state.todos.filter(todo => !todo.completed);
        },

        //mark all as a completed
        markAllCompleted: (state) => {
            state.todos.forEach(todo => {
                todo.completed = true;
                todo.updatedAt = new Date().toISOString;
            });
        }

    }
});

export const {
    addTodo,
    toggleTodo,
    editTodo,
    deleteTodo,
    setFilterStatus,
    setSearchQuary,
    clearCompleted,
    markAllCompleted

} = todoSlice.actions;

export const selectAllTodos = (state) => state.todos.todos;
export const selectFilter = (state) => state.todos.filter;

//export filter todos selector
export const selectFilteredTodos = (state) => {
    const { todos } = state.todos;
    const { status, search } = state.todos.filters;
  
    let filteredTodos = todos;
  
    // Filter by status
    if (status === 'active') {
      filteredTodos = filteredTodos.filter(todo => !todo.completed);
    } else if (status === 'completed') {
      filteredTodos = filteredTodos.filter(todo => todo.completed);
    }
  
    // Filter by search
    if (search.trim()) {
      filteredTodos = filteredTodos.filter(todo =>
        todo.text.toLowerCase().includes(search.toLowerCase())
      );
    }
  
    return filteredTodos;
  };
  
  // Export reducer
  export default todoSlice.reducer;