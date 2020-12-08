import React, {FC, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import styled from 'styled-components';
import MyIcon from '../../components/MyIcon';
import {useCategoryList} from '../../hooks/useTagList';


const StyledTagsWrapper = styled.ul`
  flex-grow: 1;
  overflow-y: auto;
`;

const Wrapper = styled.ol`
  width: 100%; display:flex; flex-wrap: wrap; justify-content: space-between; flex-direction: row;
  > li{
    display: flex; flex-direction: column; align-items: center; justify-content: center; > .svg-wrapper{
    width: 50px; height: 50px; border-radius: 8px; margin:  5px 5px; background: rgba(218,236,234,.8);
    }
    &.selected{
      > .svg-wrapper{
        width: 50px; height: 50px; border-radius: 8px; margin:  5px 5px; background: #eee;
      }
    }
    > span{
      font-size: 12px;
    }
    &:nth-last-child(-n+7){
      width: 50px; height: 50px; border-radius: 8px; margin:  5px 5px; background: inherit;
    }
  }
  .link{
    > li{
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    > .svg-wrapper{
      width: 50px; height: 50px; border-radius: 8px; margin:  5px 5px; background: rgba(218,236,234,.8);
    }
    > span{ font-size: 12px; }
    }
  }
`;

type lastTagType = 'manage' | 'add' | 'none'

type TagProps = {
  className?: string,
  toggleLink?: boolean,
  toggleText?: boolean,
  lastTag: lastTagType,
  onChange?: (categoryId: number) => void,
  defaultCategoryList: CategoryItem[]
}


const MyTags: FC<TagProps> = ({toggleLink = true, toggleText = true, lastTag, onChange, defaultCategoryList}) => {
  const {categoryList} = useCategoryList();
  const [selectedCategoryId, setSelectedCategory] = useState(1);
  const history = useHistory();

  const onToggleTag = (categoryId: number) => {
    if (categoryList.indexOf(categoryList.filter(item => item.id === categoryId)[0]) >= 0 || categoryList.filter(item => item.name === 'manage' || 'add')[0]) {
      setSelectedCategory(() => categoryId);
      onChange && onChange(categoryId);
    }
  };

  const handleClick = (item: CategoryItem) => {
    onToggleTag(item.id);
    toggleLink && history.push(`/category/edit/${item.id}`);
  };

  return (
    <StyledTagsWrapper>
      <Wrapper>
        {
          categoryList.map(item =>
            <li
              key={item.id}
              onClick={() => handleClick(item)}
              className={selectedCategoryId === item.id ? 'selected' : ''}
            >
              <MyIcon name={item.name} size='2em'/>
              {toggleText ? <span>{item.text}</span> : null}
            </li>
          )
        }
        <Link to={lastTag !== 'add' ? '/category/manage/' : '/category/add/'} className='link'>
          <li
          >
            {lastTag !== 'none' && <MyIcon name={lastTag === 'manage' ? 'manage' : 'add'} size='2em'/>}
            {lastTag === 'manage' && (<span>管理</span>)}
            {lastTag === 'add' && <span>添加</span>}
            {lastTag === 'none' && ''}
          </li>
        </Link>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </Wrapper>
    </StyledTagsWrapper>
  );
};

export {MyTags};