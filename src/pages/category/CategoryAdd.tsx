import React from 'react';
import styled from 'styled-components';
import MyLayout from '../../components/MyLayout';
import {MyTopBar} from '../../components/MyTopBar';
import MyIcon from '../../components/MyIcon';
import {MyTags} from '../money/MyTags';

const StyledLabel = styled.label`
  background: rgba(218,236,234,.8);
  border-radius: 4px;
  padding: 6px 12px;
  margin-top: 4px;
  margin-bottom: 4px;
  display:flex;
  &:first-child{
    fill: black;
  }
  > input {
  background: transparent;
  text-align: right;
  font-size: 1.4em;
    flex-grow: 1;
  }
`;

const CategoryAdd = () => {
  return (
    <MyLayout toggleNav={false}>
      <MyTopBar visibleBack={true}/>
      <main>
        <StyledLabel>
          <MyIcon name="money" size="2.5em"/>
          <input type="text" placeholder='标签名'/>
        </StyledLabel>
        <MyTags/>
      </main>
    </MyLayout>
  );
};

export {CategoryAdd};