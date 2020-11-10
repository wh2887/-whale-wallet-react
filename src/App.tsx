import React from 'react';
import {BrowserRouter as Router, Switch, NavLink, Route, Redirect} from 'react-router-dom';
import Money from './components/Money';
import Details from './components/Details';
import Statistics from './components/Statistics';
import NotMatch from './components/NotMatch';
import styled from 'styled-components';


const StyledWrapper = styled.div`
  margin: 0 auto;
  height: 100vh;
  max-width: 500px;
  display:flex;
  flex-direction: column;
`;
const StyledMain = styled.main`
  border:1px solid blue;
  flex-grow: 1;
`;
const StyledNav = styled.nav`
  border: 1px solid green;
  > ul{
      display:flex;
      flex-direction: row;
    > li{
      width: 33.333%;
      text-align:center;
      padding: 16px;
    }
  }
`;

function App() {
  return (
    <StyledWrapper>
      <Router>
        <StyledMain>
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
        </StyledMain>
        <StyledNav>
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
        </StyledNav>
      </Router>
    </StyledWrapper>
  );
}

export default App;
