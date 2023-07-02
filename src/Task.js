const Task = ({ tasks,deleteTask,toggleReminder }) => {
 
  return (
    <>
      {tasks.map((task) => (
        <li key={task.id} onDoubleClick={() => toggleReminder(task.id)}>
          <div className="card">
            <h5 className="item-title">
              {task.reminder? <i className="text-primary fa fa-circle"></i> : ""} {task.text}
            </h5>
            <div className="item-text">
              Learn the basics of react in 1 week duration
            </div>
            <div className="item-time">
              <span className="time">
                <i className="las la-clock"></i> {task.day}
              </span>
              <span onClick={()=> deleteTask(task.id)} className="mark text-primary">Mark as done</span>
            </div>
          </div>
        </li>
      ))}
    </>
  );
};

export default Task;
