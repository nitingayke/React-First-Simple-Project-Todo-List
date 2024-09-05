import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';

import "./TodoInputTask.css";
import { useState } from 'react';

export default function TodoInputTask({AddNewTask}) {
    let [input, setInputTask] = useState("");

    let handleInputTask = (event) => {
        setInputTask(event.target.value);
    }
    let handleTask = () =>{
        AddNewTask(input);
        setInputTask("");
    }

    return (
        <div>
            <p className='input-text'>Create New Task</p>
            <div className='todoinput-box'>
                <TextField onChange={handleInputTask} value={input} id="outlined-basic" label="Enter Task" variant="outlined" required/>
                <div className='adddtask-btn'>
                    <Button onClick={handleTask} variant="outlined">Add Task <PlaylistAddCheckIcon /></Button>
                </div>
            </div>
        </div>
    )
}