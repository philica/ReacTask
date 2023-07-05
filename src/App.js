import Navbar from "./Navbar";
import Tasks from "./Tasks";
import { useState } from "react";

const App = () => {
  //list of tasks array
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Learn React",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    }
  ]);

  //show or hide  task adding form

  const [formState,setFormState] = useState(false)
 
  //Add task 
const addTask = (newtask)=>{
setTasks([...tasks,newtask])
console.log(newtask)
console.log(tasks)


}

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
  const toggleForm = ()=>{
    setFormState(!formState)
  }

  return (
    <div className="App">
      <div className="page page-current">

        <Navbar toggleForm={toggleForm} formState={formState}/>
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
