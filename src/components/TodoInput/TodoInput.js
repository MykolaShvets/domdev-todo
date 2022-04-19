import React, { useState } from 'react';
import { Box, Button, FormControl, Input, InputLabel } from '@mui/material';


const TodoInput = ({ handler, value }) => {
    const [task, setTask] = useState(value);

    return (
        <Box display='flex'
            alignItems='center'
            gap='20px'
            width='100%'>
            <FormControl sx={{ width: '100%' }}>
                <InputLabel
                    htmlFor='todo'>
                    Add task
                </InputLabel>
                <Input id='todo'
                    name='todo'
                    onChange={(e) => setTask(e.target.value)}
                    value={task}
                    fullWidth />
            </FormControl>
            <Button onClick={() => { handler(task); setTask('') }}
                variant='contained'>
                ADD
            </Button>
        </Box>
    )
}

export default TodoInput