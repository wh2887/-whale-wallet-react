import React from 'react';
import MyLayout from '../components/MyLayout';
import {MyTopBar} from '../components/MyTopBar';
import {MyTags} from './money/MyTags';
import {MyNote} from './money/MyNote';
import {MyNumberPad} from './money/MyNumberPad';
import styled from 'styled-components';

const StyledMyLayout = styled(MyLayout)`
`

const Money = () => {
  return (
    <>
      <StyledMyLayout>
        <MyTopBar/>
        <MyTags/>
        <MyNote/>
        <MyNumberPad/>
      </StyledMyLayout>
    </>
  );
};

export default Money;