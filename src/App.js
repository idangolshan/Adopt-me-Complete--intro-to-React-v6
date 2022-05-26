import ReactDOM from 'react-dom';
import SearchParams from "./SerarchParams"
import Details from "./Details";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router to='/'>
        <header>
          <Link>
            <h1 id='my-brand'>Adopt Me!</h1>
          </Link>
        </header>
        <Switch>
          <Route path='/details/:id'>
            <Details />
          </Route>
          <Route path='/'>
            <SearchParams/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
 