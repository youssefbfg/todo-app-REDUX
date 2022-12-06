import "./App.css";
import { Addtask } from "./Components/Addtask";
import {ListTask} from "./Components/ListTask"
function App() {
 
  return (
    <>
      <h1>Todos</h1>
      <div >
        <Addtask/>
        <ListTask/>
  
      </div>
      

      
    </>
  );
}

export default App;
