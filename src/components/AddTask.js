// Each input will have own piece of State (Component-level not App-level)
import { useState } from "react"


const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)  
    
    const onSubmit = (e) => {
        e.preventDefault()   //So do not submit to a Page

        if (!text) {
            alert('Please add a Task')
            return
        }

        onAdd({text, day, reminder})

        // Set the form to default
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Task</label>
            <input 
                type="text" 
                placeholder="Add Task" 
                value={text} 
                onChange={(e) => setText(e.target.value)}  //put input in useState
            />
        </div>
        <div className="form-control">
            <label>Day & Time</label>
            <input 
                type="text" 
                placeholder="Add Day & Time" 
                value={day} 
                onChange={(e) => setDay(e.target.value)}   //put input in useState
            />
        </div>
        <div className="form-control form-control-check">
            <label>Set Reminder</label>
            <input 
                type="checkbox" 
                checked={reminder}  //Set unchecked if false
                value={reminder} 
                onChange={(e) => setReminder(e.currentTarget.checked)}  //as it is a checkbox
            /> 
        </div>

        <input className="btn btn-block" type="submit" value="Save Task" />
    </form>
)
}

export default AddTask