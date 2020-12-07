import React, {useEffect, useState} from 'react';
import MyLayout from '../../components/MyLayout';
import {MyTopBar} from '../../components/MyTopBar';
import MyIcon from '../../components/MyIcon';
import styled from 'styled-components';
import {MyTags} from '../money/MyTags';
import {useTagList} from '../../hooks/useTagList';
import {useParams} from 'react-router-dom';

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

type Pramas = {
  idStr: string
}

const CategoryEdit = () => {
  const {idStr} = useParams<Pramas>();
  const id = parseInt(idStr);

  const defaultTagList = [
    {id: 1, name: 'jiaotong', text: '交通'},
    {id: 2, name: 'huankuan', text: '还款'},
    {id: 3, name: 'gouwu', text: '购物'},
    {id: 4, name: 'yule', text: '娱乐'},
  ];
  const {tagList, findTag, tagInList} = useTagList(defaultTagList);
  const [selectedTagId, setSelectedTagId] = useState(id);
  const tag = findTag(selectedTagId);
  const onChange = (tagId: number) => {
    console.log('id:', id);
    console.log(selectedTagId);
    console.log('tag:', tag);
    tagInList(tagId, setSelectedTagId);
  };

  useEffect(() => {
  }, [tag]);

  return (
    <MyLayout toggleNav={false}>
      <MyTopBar visibleBack={true} visibleButton={true}/>
      <main>
        <StyledLabel>
          <MyIcon name={tag && tag.name} size="2.5em"/>
          <input type="text" placeholder='标签名'
                 value={tag && tag.text}
          />
        </StyledLabel>
        <MyTags toggleLink={false} lastTag='none' onChange={tagId => onChange(tagId)} defaultTagList={tagList}/>
        编辑标签页
      </main>
    </MyLayout>
  );
};

export {CategoryEdit};