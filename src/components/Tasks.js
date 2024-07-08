import Task from './Task'

// pass tasks as a prop from global App State so that we can use wherever we want
const Tasks = ({tasks,onDelete,onToggle})  => {
  return (
    <> 
        {tasks.map((task) => ( 
            <Task 
                key={task.id}  // need to set unique key to not getter error
                task={task} 
                onDelete={onDelete} 
                onToggle={onToggle} 
            /> 
            ))}
    </>
  )
}

export default Tasks