import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import AddEvents from './components/AddEvents/AddEvents';
import Event from './components/Event/Event';


function App() {
  return (
    <Router>  
      <div className="container">
      <nav style={{display:"inline-block"}}>
          <ul>
            <li style={{float:"left"}}>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/event">Event</Link>
            </li>
            <li>
              <Link to="/addEvents">Add Events</Link>
            </li>
          </ul>
        </nav>               
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/event">
            <Home />
          </Route>
          <Route path="/addEvents">
            <AddEvents />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </div>
    </Router>
  );
}


export default App;
