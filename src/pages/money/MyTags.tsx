import React, {FC, useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import styled from 'styled-components';
import MyIcon from '../../components/MyIcon';


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
  lastTag: lastTagType
}

type Tag = { id: number, name: string, text: string }

type TagList = Tag[]

const MyTags: FC<TagProps> = ({toggleLink = true, lastTag}) => {
  const [tagList] = useState<TagList>(
    [
      {id: 1, name: 'jiaotong', text: '交通'},
      {id: 2, name: 'huankuan', text: '还款'},
      {id: 3, name: 'gouwu', text: '购物'},
      {id: 4, name: 'yule', text: '娱乐'},
    ]
  );
  const [selectedTagId, setSelectedTag] = useState(1);
  const history = useHistory();

  const onToggleTag = (tagId: number) => {
    if (tagList.indexOf(tagList.filter(item => item.id === tagId)[0]) >= 0 || tagList.filter(item => item.name === 'manage' || 'add')[0]) {
      setSelectedTag(() => tagId);
    }
  };

  const handleClick = (item: Tag) => {
    onToggleTag(item.id);
    toggleLink && history.push(`/category/edit/${item.name}`);
  };

  return (
    <StyledTagsWrapper>
      <Wrapper>
        {
          tagList.map(item =>
            <li
              key={item.id}
              onClick={() => handleClick(item)}
              className={selectedTagId === item.id ? 'selected' : ''}
            >
              <MyIcon name={item.name} size='2em'/>
              <span>{item.text}</span>
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