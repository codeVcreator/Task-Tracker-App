import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'


const App = () => {
  // To open add task from when we press add button
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])


  useEffect(() => {
    const getTasks = async() => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  // Fetch Tasks from BackEnd (all tasks)
  const fetchTasks = async() => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  // Fetch Task from BackEnd
  const fetchTask = async(id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }


  // Add Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(task)
    })

    const data = await res.json()

    setTasks([...tasks, data])

    //We will give it a random id 
    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = {id, ...task}  //Add id then whatever we get from function call
    
    // setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })

    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method:'PUT',
      headers: {
      'Content-type': 'application'
      },
      body: JSON.stringify(updatedTask)
    })

    const data = await res.json()

    setTasks(
      tasks.map((task) =>
      task.id === id   //condition if true
        ? //copy all task properties but change reminder to opposite
          { ...task, reminder: data.reminder }
        :
          task  //if false then no change
    ))
  }

  return (
    // JSX expression must have one parent element so write all in one div or anything
    // If don't want div or anything you can use "<> </>"
    // In Javascript class='' is className = ''
    <Router>
      <div className="container">  

        {/* This will reverse the showAddTask whenever we click it */}
        <Header 
          title='Task Tracker'
          onAdd={() => setShowAddTask(!showAddTask)} 
          showAdd={showAddTask}
        />  
        
        <Routes>  {/* Kaunse Path me kya dikhana hai */}
          <Route 
            path='/' 
            element = {
              <>
                {showAddTask===true && <AddTask onAdd={addTask} />}    {/* && is short for if-then */}
    
                {/* if there are tasks then perform tasks functions else show this message */}
                {tasks.length>0 
                ? 
                  (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) 
                : 
                  'No Tasks To Show'}
              </>
            } />

          <Route path='/about' element={<About />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
