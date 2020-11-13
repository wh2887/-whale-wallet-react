import React from 'react';
import MyLayout from '../components/MyLayout';
import {MyTopBar} from '../components/MyTopBar';
import MyIcon from '../components/MyIcon';

const Money = () => {
  return (
    <MyLayout>
      <MyTopBar/>
      <div>
        记账页
        <MyIcon name='money' size='3em'/>
      </div>
    </MyLayout>
  );
};

export default Money;