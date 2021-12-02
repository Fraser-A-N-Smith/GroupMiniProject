// import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Movies from './components/Movies';
import TvShows from './components/TvShows';
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <li>
            <Link to ="/">Home</Link>
          </li>
          <li>
            <Link to ="/Movies">Movies</Link>
          </li>
          <li>
            <Link to ="/TvShows">TvShows</Link>
          </li>
        </div>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/Movies">
            <Movies/>
          </Route>
          <Route path="/TvShows">
            <TvShows/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
