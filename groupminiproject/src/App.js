// import logo from './logo.svg';

import Characters from "./components/Characters";
import Films from "./components/Films";
import Home from "./components/Home";
import Tv from "./components/Tv";

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
                    <Tv/>

                </Route>

            </Switch>
        </Router>
    </div>
  );
}

export default App;
