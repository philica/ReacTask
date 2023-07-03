import { useState } from "react";

const Form = () => {
  const [task, setTask] = useState("");
  const [day, setDate] = useState("");
  const [reminder, setReminder] = useState(false);
  return (
    <li>
      <div class="card">
        <form>
          <div class="list">
            <ul class="row">
              <li class="item-content item-input col-100 item-input-with-value">
                <div class="item-inner">
                  <div class="item-title item-label">Task</div>
                  <div class="item-input-wrap">
                    <input
                      type="text"
                      placeholder="Provide task name"
                      class="form-control input-with-value"
                      value={task}
                      onChange={(e) => setTask(e.target.value)}
                    />
                  </div>
                </div>
              </li>
              <li class="item-content col-100 item-input">
                <div class="item-inner">
                  <div class="item-title item-label">Time</div>
                  <div class="item-input-wrap">
                    <input
                      type="text"
                      placeholder="Set Time"
                      class="form-control"
                      value={day}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="clearfix">
            <a href="" class="button button  button-fill">
              save task
            </a>
          </div>
        </form>
      </div>
    </li>
  );
};

export default Form;
