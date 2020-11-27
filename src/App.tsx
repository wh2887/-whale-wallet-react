import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Money from './pages/Money';
import Details from './pages/Details';
import Statistics from './pages/Statistics';
import NotMatch from './pages/NotMatch';
import {CategoryManage} from './pages/category/CategoryManage';
import {CategoryAdd} from './pages/category/CategoryAdd';
import {CategoryEdit} from './pages/category/CategoryEdit';

function App() {
  return (
    <>
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
          // TODO
          <Route path="/manage">
            <CategoryManage/>
          </Route>
          <Route path="/add">
            <CategoryAdd/>
          </Route>
          <Route path="/edit">
            <CategoryEdit/>
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
