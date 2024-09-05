import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

import "./TodoHeadline.css"
export default function TodoHeading() {
    return (
        <h1 className='todo-headline'>
            Save Your Task
            <AssignmentTurnedInIcon/>
        </h1>
    )
}