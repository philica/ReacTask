import Navbar from "./Navbar";
import Tasks from "./Tasks";
import { useEffect, useState } from "react";

const App = () => {
  //list of tasks array
  const [tasks, setTasks] = useState([]);
  //show or hide  task adding form
  const [formState, setFormState] = useState(true);

  //load data from server 
  useEffect(()=>{
    const getTasks = async ()=>{
      const tasks = await fetchTask()
      setTasks(tasks)
    }
    getTasks()
  },[])

  //fetch task from server
  const fetchTask= async ()=>{
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }
  //Add task
  const addTask = (newtask) => {
    setTasks([...tasks, newtask]);
    console.log(newtask);
    console.log(tasks);
  };

  //delete clicked task
  const deleteTask = (id) => {
    console.log("task " + id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // change reminder status
  const toggleReminder = (id) => {
    console.log(id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
    console.log(tasks);
  };

  //toggle form view or hide
  const toggleForm = () => {
    setFormState(!formState);
  };

  return (
    <div className="App">
      <div className="page page-current">
        <Navbar toggleForm={toggleForm} formState={formState} />
        <Tasks
          tasks={tasks}
          deleteTask={deleteTask}
          toggleReminder={toggleReminder}
          onAdd={addTask}
          formState={formState}
          toggleForm={toggleForm}
        />
      </div>
    </div>
  );
};

export default App;
