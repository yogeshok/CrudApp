import { BrowserRouter, Route, Switch} from "react-router-dom";

import Navbar from "./Components/Navbar";
import Info from "./Components/Info";
import AllTasks from "./Components/AllTasks";
import AddTask from "./Components/AddTask";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Switch>
        <Route exact path="/" component={Info} />
        <Route exact path="/all" component={AllTasks} />
        <Route exact path="/add" component={AddTask} />
    </Switch>
    </BrowserRouter>
    
  );
}

export default App;
