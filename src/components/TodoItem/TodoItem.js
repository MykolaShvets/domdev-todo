import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Checkbox, Box, Typography, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { DELETE_TODO, EDIT_TODO, SET_IS_DONE } from '../../store/todo.slice';
import TodoInput from './../TodoInput/TodoInput';



const TodoItem = ({ todo }) => {
  const [isEditeble, setIsEditeble] = useState(false);
  const dispatch = useDispatch();

  const editHandler = (task) => {
    dispatch(EDIT_TODO({ todo, body: task }));
    setIsEditeble(false);
  }


  return (
    <Box display='flex'
      alignItems='center'
      justifyContent='space-between'
      width='100%'
      color={todo.isDone ? '#1677d2' : '#010101'}>
      <Checkbox icon={<CheckCircleIcon />}
        checkedIcon={<CheckCircleIcon />}
        checked={todo.isDone}
        onChange={() => dispatch(SET_IS_DONE({ todo }))} />

      {isEditeble ?
        <TodoInput handler={editHandler} value={todo.body} btnTitle={<EditIcon/>}/>
        :
        <Typography component='p' variant='h5'>{todo.body}</Typography>
      }

      <Box>
        {!isEditeble && <Button onClick={() => setIsEditeble(true)}><EditIcon color='success' /></Button>}
        <Button onClick={() => dispatch(DELETE_TODO({ todo }))}><DeleteIcon color='error' /></Button>
      </Box>
    </Box>
  )
}

export default TodoItem