import TaskCard from './TaskCard'
import {TaskContext} from '../context/taskContext'
import {useContext} from 'react'

function TaskList() {

  const {tasks} = useContext(TaskContext)

  if (tasks.length === 0) {
    return <h2>No hay tareas</h2>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task}/>
       
      ))}
    </div>
  );
}

export default TaskList;
