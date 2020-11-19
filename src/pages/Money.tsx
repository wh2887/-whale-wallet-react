import React, {FC} from 'react';
import MyLayout from '../components/MyLayout';
import {MyTopBar} from '../components/MyTopBar';
import {MyTags} from './money/MyTags';
import {MyNote} from './money/MyNote';
import {MyNumberPad} from './money/MyNumberPad';


const Money:FC = () => {
  return (
    <>
      <MyLayout>
        <MyTopBar/>
        <MyTags/>
        <MyNote/>
        <MyNumberPad/>
      </MyLayout>
    </>
  );
};

export default Money;