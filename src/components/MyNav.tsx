import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import MyIcon from './MyIcon';


const StyledNav = styled.nav`
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  > ul{
      display:flex;
      flex-direction: row;
    > li{
      width: 33.333%;
      text-align: center;
      cursor: pointer;
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  display:flex;
  font-size: 12px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6px;
  > .icon{
    width: 2.4em;
    height: 2.4em;
    margin-bottom: 2px;
  }
`;

const MyNav = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <StyledNavLink to="/details" exact>
            <MyIcon name="details"/>
            明细页
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/money">
            <MyIcon name="money"/>
            记账页
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/statistics">
            <MyIcon name="statistics"/>
            统计页
          </StyledNavLink>
        </li>
      </ul>
    </StyledNav>
  );
};

export default MyNav;