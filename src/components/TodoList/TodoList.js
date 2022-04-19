import React from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@mui/system';

import TodoItem from './../TodoItem/TodoItem';


const TodoList = () => {

    const { todos } = useSelector(state => state['todoReducer']);

    return (
        <Box display='flex'
            flexDirection='column'
            alignItems='flex-start'
            marginTop='50px'
            gap='20px'
            width='100%'>
            {todos && todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
        </Box>
    )
}

export default TodoList