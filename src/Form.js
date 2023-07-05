import { useState } from "react";

const Form = ({taskAdd}) => {
  const [task, setTask] = useState("");
  const [day, setDate] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e)=>{
    e.preventDefault()

    var id = Math.random()
    if(!task){
      alert("please add task")
    }
    
    taskAdd(
      {
        id:id,
        text:task,
        day: day
      }
    )
    
    setTask('')
    setDate('')
    
  }

  return (
    <li>
      <div className="card">
       
          <form onSubmit={onSubmit}>
          <div className="list">
            <ul className="row">
              <li className="item-content item-input col-100 item-input-with-value">
                <div className="item-inner">
                  <div className="item-title item-label">Task</div>
                  <div className="item-input-wrap">
                    <input
                      type="text"
                      placeholder="Provide task name"
                      className="form-control input-with-value"
                      value={task}
                      onChange={(e) => setTask(e.target.value)}
                    />
                  </div>
                </div>
              </li>
              <li className="item-content col-100 item-input">
                <div className="item-inner">
                  <div className="item-title item-label">Time</div>
                  <div className="item-input-wrap">
                    <input
                      type="text"
                      placeholder="Set Time"
                      className="form-control"
                      value={day}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="">
            <input href="" type="submit" value="Save Task" className="button  button-fill" />
             
            
          </div>
          </form>
      
      </div>
    </li>
  );
};

export default Form;
