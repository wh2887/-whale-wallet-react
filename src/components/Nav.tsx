import styled from 'styled-components';
import { NavLink} from 'react-router-dom';
import React from 'react';

const StyledNav = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
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
const MyNav = () => {
  return (
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
  );
};

export default MyNav;