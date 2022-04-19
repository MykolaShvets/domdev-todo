import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Box } from '@mui/system';

import { DELETE_TODO, EDIT_TODO, SET_IS_DONE } from '../../store/todo.slice';
import TodoInput from './../TodoInput/TodoInput';


const TodoItem = ({ todo }) => {
  const [isEditeble, setIsEditeble] = useState(false);
  const inputRef = useRef();
  const dispatch = useDispatch();

  const editHandler = (task) => {
    dispatch(EDIT_TODO({todo, body: task}));
    setIsEditeble(false);
  }

  
  return (
    <Box display='flex'>
      <input type='checkbox' onChange={() => dispatch(SET_IS_DONE({todo}))} />
      {isEditeble ? 
      <TodoInput handler={editHandler} value={todo.body}/>
      :
      <div>
      <p>{todo.body}</p>
      </div>}
      <button onClick={() => setIsEditeble(true)}>Edit</button>
      <button onClick={() => dispatch(DELETE_TODO({todo}))}>Delete</button>
    </Box>
  )
}

export default TodoItem