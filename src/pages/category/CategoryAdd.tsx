import React, {useState} from 'react';
import styled from 'styled-components';
import MyLayout from '../../components/MyLayout';
import {MyTopBar} from '../../components/MyTopBar';
import MyIcon from '../../components/MyIcon';
import {MyTags} from '../money/MyTags';
import {useCategoryList} from '../../hooks/useTagList';

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
  const {categoryList, addCategory, findCategory, categoryInList} = useCategoryList();
  const [selectedTagId, setSelectedTagId] = useState(1);
  const tag = findCategory(selectedTagId);
  let tagText: string;
  const onChange = (tagId: number) => {
    categoryInList(tagId, setSelectedTagId);
  };

  const onSave = () => {
    addCategory(tag.name, tagText);
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
        <MyTags lastTag='none' toggleText={false} defaultCategoryList={categoryList} toggleLink={false}
                onChange={tagId => onChange(tagId)}/>
      </main>
    </MyLayout>
  );
};

export {CategoryAdd};