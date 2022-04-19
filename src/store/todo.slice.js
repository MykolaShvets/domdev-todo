import { createSlice } from '@reduxjs/toolkit';


const localTodos = JSON.parse(localStorage.getItem('todos'));

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: {
        todos: localTodos || [],
        currentTodo: null
    },
    reducers: {
        ADD_TODO: (state, action) => {
            state.todos.push(action.payload.data);
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        SET_IS_DONE: (state, action) => {
            state.currentTodo = state.todos.find(todo => todo.id === action.payload.todo.id);
            state.currentTodo.isDone = !state.currentTodo.isDone;
            localStorage.setItem('todos', JSON.stringify(state.todos))

        },
        EDIT_TODO: (state, action) => {
            state.currentTodo = state.todos.find(todo => todo.id === action.payload.todo.id);
            state.currentTodo.body = action.payload.body;
            localStorage.setItem('todos', JSON.stringify(state.todos))

        },
        DELETE_TODO: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.todo.id);
            localStorage.setItem('todos', JSON.stringify(state.todos))
        }
    }
});

export const todoReducer = todoSlice.reducer;

export const { ADD_TODO, DELETE_TODO, SET_IS_DONE, EDIT_TODO } = todoSlice.actions;