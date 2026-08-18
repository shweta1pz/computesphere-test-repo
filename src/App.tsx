import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { DashboardPage } from "./views/pages/Dashboard";
import { HomePage } from "./views/pages/Homepage";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route
            path="/Dashboard"
            exact
            component={DashboardPage}
          ></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
