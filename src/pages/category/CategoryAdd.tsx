import React from 'react';
import MyLayout from '../../components/MyLayout';
import {MyTopBar} from '../../components/MyTopBar';

const CategoryAdd = () => {
  return (
    <MyLayout>
      <MyTopBar visibleBack={true}/>
      <main>
        添加标签页
      </main>
    </MyLayout>
  );
};

export {CategoryAdd};