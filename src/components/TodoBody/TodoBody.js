import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';

import TodoInput from './../TodoInput/TodoInput';
import TodoList from './../TodoList/TodoList';
import { ADD_TODO } from '../../store/todo.slice';

const TodoBody = () => {

    const { todos } = useSelector(state => state['todoReducer']);
    const dispatch = useDispatch();

    const taskHandler = (task) => {
        const data = { id: uuid(), body: task, isDone: false };

        dispatch(ADD_TODO({ data }));

    }

    return (
        <Container maxWidth='md'>
            <Box display='flex'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'>
                <Typography variant='h1' sx={{ marginBottom: '50px' }}> ToDo ({todos.length})</Typography>
                <TodoInput handler={taskHandler} value={''} />
                <TodoList />
            </Box>
        </Container>
    )
}

export default TodoBody