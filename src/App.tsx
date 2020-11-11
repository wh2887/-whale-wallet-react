import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Money from './pages/Money';
import Details from './pages/Details';
import Statistics from './pages/Statistics';
import NotMatch from './pages/NotMatch';
import {Animation} from './styles/Animation';

function App() {
  return (
    <>
      <Animation />
      <Router>
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
          <Route path="*">
            <NotMatch/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
