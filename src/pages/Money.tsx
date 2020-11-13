import React from 'react';
import MyLayout from '../components/MyLayout';
import {MyTopBar} from '../components/MyTopBar';

const Money = () => {
  return (
    <MyLayout>
      <MyTopBar/>
      <div>记账页</div>
    </MyLayout>
  );
};

export default Money;