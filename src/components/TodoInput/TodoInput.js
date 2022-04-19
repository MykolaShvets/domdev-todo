import React, { useState } from 'react';
import { Box, Button, FormControl, Input, InputLabel } from '@mui/material';


const TodoInput = ({handler, value}) => {
    const [task, setTask] = useState(value);

    return (
        <Box display='flex'
        alignItems='center'
        gap='20px'>
            <FormControl  width='80%'>
                <InputLabel htmlFor='todo'>Add task</InputLabel>
                <Input id='todo' name='todo' onChange={(e) => setTask(e.target.value)} value={task} />
            </FormControl>
            <Button onClick={() => handler(task)} variant='contained'>ADD</Button>
        </Box>
    )
}

export default TodoInput