import React, {FC, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import styled from 'styled-components';
import MyIcon from '../../components/MyIcon';


const StyledTagsWrapper = styled.ul`
  flex-grow: 1;
  overflow-y: auto;
`;

const Wrapper = styled.ol`
  width: 100%;
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
  > li,.link{
    width: 50px;
    height: 50px;
    border-radius: 8px;
    margin:  5px 5px;
    background: rgba(218,236,234,.8);
    display: flex;
    align-items: center;
    justify-content: center;
    &.selected{
      background: #eee;
    }
  &:nth-last-child(-n+7){
    background: inherit;
  }
  }
`;

type TagProps = {
  className?: string,
  toggleLink?: boolean
}

type TagList = string[]

const MyTags: FC<TagProps> = ({toggleLink = true}) => {
  const [tagList] = useState<TagList>(['money', 'details', 'statistics', 'jiaotong', 'game', 'huankuan', 'gouwu', 'yule']);
  const [selectedTag, setSelectedTag] = useState('money');
  const history = useHistory();

  const onToggleTag = (item: string) => {
    if (tagList.indexOf(item) >= 0 || item === 'manage') {
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
            </li>
          )
        }
        <Link to={'/category/manage/'} className='link'>
          <li
            onClick={() => onToggleTag('manage')}
            className={selectedTag === 'manage' ? 'selected' : ''}
          >
            <MyIcon name='manage' size='2em'/>
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