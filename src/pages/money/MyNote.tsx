import React from 'react';
import styled from 'styled-components';

const StyledNoteWrapper = styled.div`
  min-height: 50px;
  border-radius: 8px;
`

const MyNote = () => {
  return (
    <StyledNoteWrapper>
      <label>
        <input type="text" placeholder='备注'/>
      </label>
    </StyledNoteWrapper>
  );
};

export {MyNote};