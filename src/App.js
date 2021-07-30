import "./App.css";
import Countries from "./Components/Countries";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import States from "./Components/States";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Countries />
          </Route>
          <Route exact path="/:country">
            <States />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
