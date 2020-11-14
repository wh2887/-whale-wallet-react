import React from 'react';
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
const MyLayout = (props: any) => {
  return (
    <StyledWrapper>
      <StyledMain>
        {props.children}
      </StyledMain>
      <MyNav/>
    </StyledWrapper>
  );
};

export default MyLayout;