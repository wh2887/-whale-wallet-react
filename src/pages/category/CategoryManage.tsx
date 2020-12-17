import React, {FC} from 'react';
import MyLayout from '../../components/MyLayout';
import {MyTopBar} from '../../components/MyTopBar';
import {MyTags} from '../money/MyTags';

const CategoryManage: FC = () => {
  return (
    <MyLayout toggleNav={false}>
      <MyTopBar visibleBack={true}/>
      <main>
        <MyTags lastTag='add' categoryType={'-'}/>
      </main>
    </MyLayout>
  );
};
export {CategoryManage};
