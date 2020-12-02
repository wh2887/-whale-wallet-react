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
    &.selected{
      > .svg-wrapper{
        width: 50px; height: 50px; border-radius: 8px; margin:  5px 5px; background: #eee;
      }
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

type TagList = string[]

const MyTags: FC<TagProps> = ({toggleLink = true, lastTag}) => {
  const [tagList] = useState<TagList>(['money', 'details', 'statistics', 'jiaotong', 'game', 'huankuan', 'gouwu', 'yule']);
  const [selectedTag, setSelectedTag] = useState('money');
  const history = useHistory();

  useEffect(() => {
    console.log(lastTag);
  }, []);

  const onToggleTag = (item: string) => {
    if (tagList.indexOf(item) >= 0 || item === 'manage' || 'add') {
      setSelectedTag(() => item);
    }
  };

  const handleClick = (item: string) => {
    onToggleTag(item);
    toggleLink && history.push(`/category/edit/${item}`);

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
        <Link to={lastTag !== 'add' ? '/category/manage/' : '/category/add/'} className='link'>
          <li
            onClick={() => onToggleTag(lastTag)}
            className={selectedTag === ('manage' || 'add') ? 'selected' : ''}
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