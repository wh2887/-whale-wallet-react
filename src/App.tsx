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
          <Redirect exact from='/' to='details'/>
          <Route path="/details">
            <Details/>
          </Route>
          <Route exact path="/money">
            <Money/>
          </Route>
          <Route exact path="/category/manage">
            <CategoryManage/>
          </Route>
          <Route exact path="/category/add">
            <CategoryAdd/>
          </Route>
          <Route exact path="/category/edit/:idStr">
            <CategoryEdit/>
          </Route>
          <Route exact path="/statistics">
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
