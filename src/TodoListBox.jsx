import TodoInputTask from "./TodoInputTask";
import TodoTasks from "./TodoTasks";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoListBox(){
    let [tasks, setTask] = useState([]);

    let AddNewTask = (task) => {
        setTask((prevArr) => {
            return [...prevArr, {task: task, id: uuidv4(), isDone: false}]
        });
    }
    let markAsDone = (id) => {
        let newTask = tasks.map((prevTask) => {
            if(prevTask.id === id){
                prevTask.isDone = true;
            }
            return {...prevTask}
        });

        setTask(newTask);
    }
    let removeTask = (id) => {
        let newTask = tasks.filter((currTsk) => {
            if(currTsk.id !== id){
                return {...currTsk}
            }
        });

        setTask(newTask);
    }
    return (
        <div>
            <TodoInputTask AddNewTask={AddNewTask}/>
            <TodoTasks tasks={tasks} markAsDone={markAsDone} removeTask={removeTask}/>
        </div>
    )
}