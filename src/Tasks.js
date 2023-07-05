import Task from "./Task";
import Form from "./Form"

const Tasks = ({tasks,deleteTask,toggleReminder,onAdd,formState,toggleForm}) => {
  return (
    <div className="page-content bg-gray pt-90 bottom-sp30">
      <div className="container">
      

        <div className="notification-list mb-30">
          <ul>
           {formState && <Form taskAdd={onAdd} toggleForm={toggleForm}/>}
           <Task tasks={tasks} deleteTask={deleteTask} toggleReminder={toggleReminder}/>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
