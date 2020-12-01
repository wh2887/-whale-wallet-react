import React, {FC, useState} from 'react';
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
    &.selected{
      > .svg-wrapper{
        width: 50px; height: 50px; border-radius: 8px; margin:  5px 5px; background: #eee;
      }
    }
    > span{ font-size: 12px; }
    }
  }
`;

type TagProps = {
  className?: string,
  toggleLink?: boolean,
  lastTagType: 'manage' | 'add' | 'none'
}

type TagList = string[]

const MyTags: FC<TagProps> = ({toggleLink = true, lastTagType}) => {
  const [tagList] = useState<TagList>(['money', 'details', 'statistics', 'jiaotong', 'game', 'huankuan', 'gouwu', 'yule']);
  const [selectedTag, setSelectedTag] = useState('money');
  const history = useHistory();

  const onToggleTag = (item: string) => {
    if (tagList.indexOf(item) >= 0 || item === 'manage' || 'add') {
      setSelectedTag(() => item);
    }
    lastTagType === 'add' && history.push('/category/add/');
  };

  const handleClick = (item: string) => {
    onToggleTag(item);
    if (toggleLink) {
      history.push(`/category/edit/${item}`);
    }
  };

  return (
    <StyledTagsWrapper>
      <Wrapper>
        {
          tagList.map((item, index) =>
            <li
              key={index}
              onClick={() => handleClick(item)}
              className={selectedTag === item ? 'selected' : ''}
            >
              <MyIcon name={item} size='2em'/>
              <span>设置</span>
            </li>
          )
        }
        <Link to={'/category/manage/'} className='link'>
          <li
            onClick={() => onToggleTag('manage')}
            className={selectedTag === 'manage' ? 'selected' : ''}
          >
            {lastTagType !== 'none' && <MyIcon name={lastTagType === 'manage' ? 'manage' : 'add'} size='2em'/>}
            {lastTagType === 'manage' && (<span>管理</span>)}
            {lastTagType === 'add' && <span>添加</span>}
            {lastTagType === 'none' && ''}
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