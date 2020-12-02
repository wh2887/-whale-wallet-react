import React, {FC} from 'react';
import MyLayout from '../../components/MyLayout';
import {MyTopBar} from '../../components/MyTopBar';
import {MyTags} from '../money/MyTags';

const CategoryManage: FC = () => {
  return (
    <MyLayout>
      <MyTopBar visibleBack={true}/>
      <main>
        <MyTags lastTag='add'/>
        标签管理页
      </main>
    </MyLayout>
  );
};

export {CategoryManage};
