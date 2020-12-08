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

  let defaultTagList = [
  ];

  const {tagList, findTag, tagInList, updateTag, deleteTag} = useTagList();
  const [selectedTagId, setSelectedTagId] = useState(id);
  const tag = findTag(selectedTagId);
  const onChange = (tagId: number) => {
    tagInList(tagId, setSelectedTagId);
  };

  const onSave = () => {
  };

  return (
    <MyLayout toggleNav={false}>
      <MyTopBar visibleBack={true} visibleButton={true} handleClick={onSave}/>
      {
        tag ?
          <main>
            <StyledLabel>
              <MyIcon name={tag.name} size="2.5em"/>
              <input type="text" placeholder='标签名'
                     value={tag.text}
                     onChange={(e) => {
                       updateTag(tag, {text: e.target.value});
                     }}
              />
            </StyledLabel>
            <MyTags toggleLink={false} toggleText={false} lastTag='none' onChange={tagId => onChange(tagId)} defaultTagList={tagList}/>
            <button onClick={() => deleteTag(tag.id)}>删除标签</button>
          </main> : <div>tag不存在</div>
      }
    </MyLayout>
  );
};

export {CategoryEdit};