// Install react-icons from terminal : npm i react-icons
// After installing run app again by : Ctrl+C => npm start

import { FaTimes } from "react-icons/fa"  //Icon of "X"

const Task = ({task,onDelete,onToggle}) => {
  return (
    // give same className to get CSS from css folder
    <div className={`task ${task.reminder === true ? 'reminder' : '' }`} onDoubleClick={() => onToggle(task.id)}>   
        <h3>
          {task.text} 
          <FaTimes 
            style={{color:'red',cursor:'pointer'}}
            onClick={() => onDelete(task.id)}  //call function onDelete with prop(task.id)
          /> 
        </h3>
        <p>{task.day}</p>
    </div>
  )
}

export default Task
