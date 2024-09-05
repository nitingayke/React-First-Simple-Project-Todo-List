import TodoListButtons from "./TodoListButtons";
import "./TodoTasks.css";
import ListAltIcon from '@mui/icons-material/ListAlt';

export default function TodoTasks({ tasks, markAsDone, removeTask}) {
    return (
        <div className="TodoTasks">

            <h2>Today's Priorities <span className="list-icon"><ListAltIcon /></span> </h2>

            {tasks.map((task, idx) =>
                <li key={idx}>

                    {task.isDone ? <p style={{textDecoration: "line-through", color: "gray"}}>{task.task}</p> : <p>{task.task}</p>}
                    <TodoListButtons id={task.id} markAsDone={markAsDone} removeTask={removeTask}/>

                </li>)}
        </div>
    )
}