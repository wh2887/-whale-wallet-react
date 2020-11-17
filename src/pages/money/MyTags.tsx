import React, {FC, useState} from 'react';
import styled from 'styled-components';
import MyIcon from '../../components/MyIcon';


const StyledTagsWrapper = styled.ul`
  flex-grow: 1;
  overflow-y: auto;
`;

const Wrapper = styled.div`
  width: 100%;
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
  > li{
    width: 50px;
    height: 50px;
    border-radius: 8px;
    margin:  5px 5px;
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

  const [tagList, setTagList] = useState<TagList>(['money', 'details', 'statistics', 'jiaotong', 'game', 'huankuan', 'gouwu', 'yule']);

  return (
    <StyledTagsWrapper>
      <Wrapper>
        {
          tagList.map((item, index) =>
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
      </Wrapper>
    </StyledTagsWrapper>
  );
};

export {MyTags};