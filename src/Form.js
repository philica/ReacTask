const Form = () => {
  return (
    <li>
      <div class="card">
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
                  />
                  
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};

export default Form;
