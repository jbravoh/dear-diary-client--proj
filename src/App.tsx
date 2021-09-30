import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SigupForm";
import NewPostForm from "./components/NewPostForm";

function App(): JSX.Element {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/new-post">
          <NewPostForm />
        </Route>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/signup">
          <SignupForm />
        </Route>


      </Switch>
    </Router>
  );
}

export default App;
