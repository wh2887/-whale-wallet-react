import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Money from './pages/Money';
import Details from './pages/Details';
import Statistics from './pages/Statistics';
import NotMatch from './pages/NotMatch';
import styled from 'styled-components';
import MyNav from './components/Nav';


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
        <MyNav/>
      </Router>
    </StyledWrapper>
  );
}

export default App;
