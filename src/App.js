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
    },
    {
      id: 3,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
  ]);

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
        task.id == id ? { ...task, reminder: !task.reminder } : task
      )
    );
    console.log(tasks);
  };

  return (
    <div className="App">
      <div className="page page-current">

        <Navbar />
        <Tasks
          tasks={tasks}
          deleteTask={deleteTask}
          toggleReminder={toggleReminder}
        />
      </div>
    </div>
  );
};

export default App;
