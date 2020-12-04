import React, {FC} from 'react';
import MyLayout from '../../components/MyLayout';
import {MyTopBar} from '../../components/MyTopBar';
import {MyTags} from '../money/MyTags';

const CategoryManage: FC = () => {
  const defaultTagList = [
    {id: 1, name: 'jiaotong', text: '交通'},
    {id: 2, name: 'huankuan', text: '还款'},
    {id: 3, name: 'gouwu', text: '购物'},
    {id: 4, name: 'yule', text: '娱乐'},
  ];

  return (
    <MyLayout toggleNav={false}>
      <MyTopBar visibleBack={true}/>
      <main>
        <MyTags lastTag='add' defaultTagList={defaultTagList}/>
        标签管理页
      </main>
    </MyLayout>
  );
};

export {CategoryManage};
