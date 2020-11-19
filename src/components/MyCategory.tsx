import React, {useState} from 'react';
import styled from 'styled-components';


const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.2em;
  border-radius: 4.5px;
  margin: 6px 0;
  > li{
    border: 1px solid #68B0AB;
    padding: .3em 1em;
    overflow: hidden;
    flex-grow: 1;
    flex-shrink: 0;
    cursor: pointer;
    &:first-child {
      border-radius: 4.5px 0 0 4.5px;
    }
    &:last-child {
      border-radius: 0 4.5px 4.5px 0;
    }
    &.selected{
      background: #68B0AB;
      color: white;
    }
  }
`;


const categoryMap = {'-': '支出', '+': '收入'};
type Keys = keyof typeof categoryMap

const MyCategory = () => {
  const [categoryList] = useState<Keys[]>(['-', '+']);
  const [category, setCategory] = useState('-');

  return (
    <StyledUl>
      {
        categoryList.map(c =>
          <li
            className={category === c ? 'selected' : ''}
            onClick={() => setCategory(c)}
          >
            {categoryMap[c]}
          </li>
        )
      }
    </StyledUl>
  );
};

export {MyCategory};