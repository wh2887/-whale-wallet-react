import React from 'react';
import styled from 'styled-components';
import MyNav from './MyNav';


const StyledWrapper = styled.div`
  margin: 0 auto;
  height: 100vh;
  max-width: 500px;
  display:flex;
  flex-direction: column;
`;
const StyledMain = styled.main`
  flex-grow: 1;
`;
const MyLayout = (props: any) => {
  return (
    <div>
      <StyledWrapper>
        <StyledMain>
          {props.children}
        </StyledMain>
        <MyNav/>
      </StyledWrapper>
    </div>
  );
};

export default MyLayout;