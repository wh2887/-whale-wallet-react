import React from 'react';
import {BrowserRouter as Router, Switch, NavLink, Route, Redirect} from 'react-router-dom';
import Money from './components/Money';
import Details from './components/Details';
import Statistics from './components/Statistics';

function App() {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li>
              <NavLink to="/details" exact>明细页</NavLink>
            </li>
            <li>
              <NavLink to="/money">记账页</NavLink>
            </li>
            <li>
              <NavLink to="/statistics">统计页</NavLink>
            </li>
          </ul>
        </nav>
        <main>
          <Switch>
            <Redirect from='/' to='details' exact/>
            <Route path="/details">
              <Details/>
            </Route>
            <Route path="/money">
              <Money/>
            </Route>
            <Route path="/statistics">
              <Statistics/>
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
