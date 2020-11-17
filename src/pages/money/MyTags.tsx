import React, {FC, useState} from 'react';
import styled from 'styled-components';
import MyIcon from '../../components/MyIcon';

const gap = '20px';

const StyledTagsWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-grow: 1;
  overflow-y: scroll;
  > li{
    width: 50px;
    height: 50px;
    margin: ${parseInt(gap) / 2}px;
    border-radius: 8px;
    background: rgba(218,236,234,.8);
    display: flex;
    align-items: center;
    justify-content: center;
  &:nth-last-child(-n+7){
    background: inherit;
  }
  }
`;

type TagProps = {
  className?: string
}

type TagList = string[]

const MyTags: FC<TagProps> = () => {

  const [tagList, setTagList] = useState<TagList>([
    'money', 'details', 'statistics',
    'money', 'details', 'statistics',
    'money', 'details', 'statistics',
    'money', 'details', 'statistics',
    'money', 'details', 'statistics',
    'money', 'details', 'statistics',
    'money', 'details', 'statistics',
    'money', 'details', 'statistics',
    'money', 'details', 'statistics',
    'money', 'details', 'statistics',
    'money', 'details', 'statistics',
    'money', 'details', 'statistics',
    'money', 'details', 'statistics',
    'money', 'details', 'statistics',
    'money', 'details', 'statistics',
    'money', 'details', 'statistics',
    'money', 'details', 'statistics',
    'money', 'details', 'statistics',
    'money', 'details', 'statistics',
    'money', 'details', 'statistics',
    'money', 'details', 'statistics',
  ]);

  return (
    <StyledTagsWrapper>
      {
        tagList.map((item,index) =>
          <li key={index}>
            <MyIcon name={item} size='2em'/>
          </li>
        )
      }
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </StyledTagsWrapper>
  );
};

export {MyTags};