import { createSlice } from '@reduxjs/toolkit';


const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: {
        todos: [],
        currentTodo: null
    },
    reducers: {
        ADD_TODO: (state, action) => {
            state.todos.push(action.payload.data);
        },
        SET_IS_DONE: (state, action) => {
            state.currentTodo = state.todos.find(todo => todo.id === action.payload.todo.id);
            state.currentTodo.isDone = !state.currentTodo.isDone;
        },
        EDIT_TODO: (state, action) => {
            state.currentTodo = state.todos.find(todo => todo.id === action.payload.todo.id);
            state.currentTodo.body = action.payload.body;
        },
        DELETE_TODO: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.todo.id);
        }
    }
});

export const todoReducer = todoSlice.reducer;

export const { ADD_TODO, DELETE_TODO, SET_IS_DONE, EDIT_TODO } = todoSlice.actions;