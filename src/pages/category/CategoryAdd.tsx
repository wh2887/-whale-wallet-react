import React from 'react';
import styled from 'styled-components';
import MyLayout from '../../components/MyLayout';
import {MyTopBar} from '../../components/MyTopBar';
import MyIcon from '../../components/MyIcon';
import {MyTags} from '../money/MyTags';

const StyledLabel = styled.label`
  background: rgba(218,236,234,.8);
  border-radius: 4px;
  padding: 6px 12px;
  margin-top: 4px;
  margin-bottom: 4px;
  display:flex;
  &:first-child{
    fill: black;
  }
  > input {
  background: transparent;
  text-align: right;
  font-size: 1.4em;
    flex-grow: 1;
  }
`;

const CategoryAdd = () => {
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
        <StyledLabel>
          <MyIcon name="money" size="2.5em"/>
          <input type="text" placeholder='标签名'/>
        </StyledLabel>
        <MyTags lastTag='none' defaultTagList={defaultTagList}/>
        添加页
      </main>
    </MyLayout>
  );
};

export {CategoryAdd};