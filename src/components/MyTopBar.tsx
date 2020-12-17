import React, {FC} from 'react';
import styled from 'styled-components';
import MyIcon from './MyIcon';
import {MyCategory} from './MyCategory';
import {useHistory} from 'react-router-dom';

const StyledTopBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  background: rgba(218,236,234,.8);
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
  values?: Category,
  onChange?: (category: Category) => void,
  visibleBack?: boolean,
  visibleButton?: boolean,
  handleClick?: () => void
}

const MyTopBar: FC<TopBarProp> = (props) => {
  const {values, onChange, visibleBack, visibleButton, handleClick} = props;
  const history = useHistory();
  const onClick = () => {
    handleClick && handleClick();
  };
  const handleChange = (category: Category) => {
    onChange && onChange(category);
  };

  return (
    <StyledTopBarWrapper>
      <StyledLeft onClick={() => history.goBack()}>
        {visibleBack && <MyIcon name="left"/>}
      </StyledLeft>
      <MyCategory values={values} onChange={category => handleChange(category)}/>
      <StyledRight>
        {visibleButton && <button onClick={onClick}>完成</button>}
      </StyledRight>
    </StyledTopBarWrapper>
  );
};

export {MyTopBar};