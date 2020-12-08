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
  const {tagList, addTag, findTag, tagInList} = useTagList();
  const [selectedTagId, setSelectedTagId] = useState(1);
  const tag = findTag(selectedTagId);
  let tagText: string;
  const onChange = (tagId: number) => {
    tagInList(tagId, setSelectedTagId);
  };

  const onSave = () => {
    addTag(tag.name, tagText);
  };

  return (
    <MyLayout toggleNav={false}>
      <MyTopBar visibleBack={true} visibleButton={true} handleClick={onSave}/>
      <main>
        <StyledLabel>
          <MyIcon name={tag && tag.name} size="2.5em"/>
          <input type="text" placeholder='标签名'
                 onChange={(e) => { tagText = e.target.value; }}
          />
        </StyledLabel>
        <MyTags lastTag='none' toggleText={false} defaultTagList={defaultTagList} toggleLink={false}
                onChange={tagId => onChange(tagId)}/>
      </main>
    </MyLayout>
  );
};

export {CategoryAdd};