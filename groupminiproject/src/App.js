// import logo from './logo.svg';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Characters from "./components/Characters";
import Films from "./components/Films";
import Home from "./components/Home";
import Tv from "./components/Tv";

import DataGetter from "./components/DataGetter";


//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Characters">Characters</Link>
          </li>
          <li>
            <Link to="/Films">Films</Link>
          </li>
          <li>
            <Link to="/Tv">Tv</Link>
          </li>

        </div>
        <Switch>

          <Route path="/" exact>
            <Home />

          </Route>
          <Route path="/Characters" >
            <Characters />

          </Route>
          <Route path="/Films" >
            <Films />

          </Route>
          <Route path="/Tv" >
            <Tv />

          </Route>


            </Switch>
      </Router>
      {/* <DataGetter/> */}



    </div>
  );
}

export default App;
