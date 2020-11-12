import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import MyIcon from './MyIcon';


type NavStructure = { id: number, path: string, name: string }[]

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
  &.selected{
  color: #68B0AB;
    .svg-wrapper{
      position: relative;
      &::after{
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #68B0AB;
        border-radius: 50%;
        padding: 1.2em;
        z-index: -1;
        }
      > .icon{
        fill:white;
        width: 1.8em;
        height: 1.8em;
      }
    }
  }
  .svg-wrapper{
      margin-bottom: 2px;
    > .icon{
      width: 2.4em;
      height: 2.4em;
    }
  }
`;

const MyNav = () => {

  const arr: NavStructure = [
    {id: 0, path: 'details', name: '明细'},
    {id: 1, path: 'money', name: '记账'},
    {id: 2, path: 'statistics', name: '统计'}
  ];
  return (
    <div>
      <StyledNav>
        <ul>
          {
            arr.map(item => (
              <li key={item.id}>
                <StyledNavLink to={'/' + item.path} exact activeClassName="selected">
                  <MyIcon name={item.path}/>
                  {item.name}
                </StyledNavLink>
              </li>
            ))
          }
        </ul>
      </StyledNav>
    </div>
  );
};

export default MyNav;