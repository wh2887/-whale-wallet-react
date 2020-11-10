import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';

require('../icons/money.svg');
require('../icons/details.svg');
require('../icons/statistics.svg');

const StyledNav = styled.nav`
  line-height: 24px;
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
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

const MyNav = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <StyledNavLink to="/details" exact>
            <svg className="icon">
              <use xlinkHref="#details"/>
            </svg>
            明细页
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/money">
            <svg className="icon">
              <use xlinkHref="#money"/>
            </svg>
            记账页
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/statistics">
            <svg className="icon">
              <use xlinkHref="#statistics"/>
            </svg>
            统计页
          </StyledNavLink>
        </li>
      </ul>
    </StyledNav>
  );
};

export default MyNav;