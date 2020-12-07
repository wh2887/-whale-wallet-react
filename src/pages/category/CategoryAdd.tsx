import React, {useState} from 'react';
import styled from 'styled-components';
import MyLayout from '../../components/MyLayout';
import {MyTopBar} from '../../components/MyTopBar';
import MyIcon from '../../components/MyIcon';
import {MyTags} from '../money/MyTags';
import {createId} from '../../libs/createId';
import {useTagList} from '../../hooks/useTagList';

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
    {id: createId(), name: 'jiaotong', text: '交通'},
    {id: createId(), name: 'huankuan', text: '还款'},
    {id: createId(), name: 'gouwu', text: '购物'},
    {id: createId(), name: 'yule', text: '娱乐'},
    {id: createId(), name: 'game', text: '游戏'},
  ];
  const {tagList, findTag} = useTagList(defaultTagList);
  const [selectedTagId, setSelectedTagId] = useState(1);
  const tag = findTag(selectedTagId);
  const onChange = (tagId: number) => {
    if (tagList.indexOf(tagList.filter(item => item.id === tagId)[0]) >= 0) {
      setSelectedTagId(() => tagId);
    }
  };



  return (
    <MyLayout toggleNav={false}>
      <MyTopBar visibleBack={true} visibleButton={true}/>
      <main>
        <StyledLabel>
          <MyIcon name={tag && tag.name} size="2.5em"/>
          <input type="text" placeholder='标签名'/>
        </StyledLabel>
        <MyTags lastTag='none' defaultTagList={defaultTagList} toggleLink={false} onChange={tagId => onChange(tagId)}/>
        添加页
      </main>
    </MyLayout>
  );
};

export {CategoryAdd};