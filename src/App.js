import Navbar from "./Navbar";
import Tasks from "./Tasks";

const App = () => {
  return (
    <div className="App">
      <div className="page page-current">
        <Navbar/>   
        <Tasks/>  
      </div>
    </div>
  );
}

export default App;


