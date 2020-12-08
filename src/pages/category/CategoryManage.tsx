import React, {FC} from 'react';
import MyLayout from '../../components/MyLayout';
import {MyTopBar} from '../../components/MyTopBar';
import {MyTags} from '../money/MyTags';

const CategoryManage: FC = () => {
  const defaultTagList = [
    {id: 1, name: 'jiaotong', text: '交通'},
  ];
  return (
    <MyLayout toggleNav={false}>
      <MyTopBar visibleBack={true}/>
      <main>
        <MyTags lastTag='add' defaultCategoryList={defaultTagList}/>
      </main>
    </MyLayout>
  );
};
export {CategoryManage};
