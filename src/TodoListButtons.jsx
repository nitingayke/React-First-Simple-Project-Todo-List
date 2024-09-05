import Button from '@mui/material/Button';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TodoListButtons({id, markAsDone, removeTask}) {

    return (
        <div>
            <Button onClick={() => markAsDone(id)} variant="contained" startIcon={<DoneAllIcon />}>Done</Button>
            &nbsp;
            <Button onClick={() => removeTask(id)} variant="contained" color="error" startIcon={<DeleteIcon />}>Remove</Button>
        </div>
    )
}