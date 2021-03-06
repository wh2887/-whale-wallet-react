import React, {FC} from 'react';
import styled from 'styled-components';
import MyNav from './MyNav';


const StyledWrapper = styled.div`
  height: 100vh;
  max-width: 500px;
  display:flex;
  flex-direction: column;
`;
const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;
  -webkit-overflow-scrolling:touch;
  background: #68B0AB;
  > :not(:first-child){
    margin: 0 4px 4px 4px;
  }
`;

type Props = {
  toggleNav?: boolean
}

const MyLayout: FC<Props> = (props) => {
  return (
    <StyledWrapper>
      <StyledMain>
        {props.children}
      </StyledMain>
      {props.toggleNav && <MyNav/>}
    </StyledWrapper>
  );
};

MyLayout.defaultProps = {
  toggleNav: true
};

export default MyLayout;