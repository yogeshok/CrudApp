import { BrowserRouter, Route, Switch} from "react-router-dom";

import Navbar from "./Components/Navbar";
import Info from "./Components/Info";
import AllTasks from "./Components/AllTasks";
import AddTask from "./Components/AddTask";
import NotFound from "./Components/NotFound";
import EditTask from "./Components/EditTask";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Switch>
        <Route exact path="/" component={Info} />
        <Route exact path="/all" component={AllTasks} />
        <Route exact path="/add" component={AddTask} />
        <Route exact path="/edit/:id" component={EditTask} />
        <Route component={NotFound} />
    </Switch>
    </BrowserRouter>
    
  );
}

export default App;
