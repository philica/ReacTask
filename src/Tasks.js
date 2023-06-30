let tasks = [
  {
    id: 1,
    text: "Doctors Appointment",
    day: "Feb 5th at 2:30pm",
    reminder: true,
  },
  {
    id: 2,
    text: "Meeting at School",
    day: "Feb 6th at 1:30pm",
    reminder: true,
  }
];

const Tasks = () => {
  return (
    <div className="page-content bg-gray pt-90 bottom-sp30">
      <div className="container">
        <div className="notification-list mb-30">
          <ul>
           
           {tasks.map((task) => ( <li key={task.id}>
              <div className="card">
                <h5 className="item-title">
                  <i className="text-primary fa fa-circle"></i> {task.text}
                </h5>
                <div className="item-text">
                  Learn the basics of react in 1 week duration
                </div>
                <div className="item-time">
                  <span className="time">
                    <i className="las la-clock"></i> 10h ago
                  </span>
                  <span className="mark text-primary">Mark as done</span>
                </div>
              </div>
            </li>))}

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
