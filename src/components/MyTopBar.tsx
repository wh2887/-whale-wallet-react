import React, {useState, FC} from 'react';
import styled from 'styled-components';
import MyIcon from './MyIcon';

const StyledTopBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  background: rgba(218,236,234,.8);
`;
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
const StyledLeft = styled.div`
  width: 25vw;
  display:flex;
  justify-content: flex-start;
`;
const StyledRight = styled.div`
  width: 25vw;
  display:flex;
  justify-content: flex-end;
  > button{
    padding-right: 8px;
    background: inherit;
  }
`;

type TopBarProp = {
  visibleBack?: boolean,
  visibleButton?: boolean
}

type Category = { id: number, category: string }

const MyTopBar: FC<TopBarProp> = (props) => {
  const {visibleBack, visibleButton} = props;

  const [categoryList, setCategoryList] = useState<Category[]>([{id: 0, category: '支出'}, {id: 1, category: '收入'}]);
  const [selectedCategory, setSelectedCategory] = useState('支出');

  const onClick = (item: Category) => {
    if (categoryList.indexOf(item) >= 0) {
      setSelectedCategory(() => item.category);
    }
  };

  return (
    <StyledTopBarWrapper>
      <StyledLeft>
        {visibleBack && <MyIcon name="left"/>}
      </StyledLeft>
      <StyledUl>
        {
          categoryList.map((item) => {
            return (
              <li
                key={item.id}
                onClick={() => onClick(item)}
                className={selectedCategory === item.category ? 'selected' : ''}
              >{item.category}</li>
            );
          })
        }
      </StyledUl>
      <StyledRight>
        {visibleButton && <button>完成</button>}
      </StyledRight>
    </StyledTopBarWrapper>
  );
};

export {MyTopBar};