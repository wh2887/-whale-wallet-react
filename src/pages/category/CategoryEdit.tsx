import React from 'react';
import MyLayout from '../../components/MyLayout';
import {MyTopBar} from '../../components/MyTopBar';
import MyIcon from '../../components/MyIcon';
import styled from 'styled-components';

const StyledLabel = styled.label`
  display:flex;
  &:first-child{
    fill: red;
    background: white;
  }
  > input {
    flex-grow: 1;
  }
`

const CategoryEdit = () => {
  return (
    <MyLayout toggleNav={false}>
      <MyTopBar visibleBack={true}/>
      <main>
        <StyledLabel>
          <MyIcon name="money" size="2em"/>
          <input type="text"/>
        </StyledLabel>
      </main>
    </MyLayout>
  );
};

export {CategoryEdit};