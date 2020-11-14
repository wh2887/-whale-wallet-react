import React from 'react';
import styled from 'styled-components';

const StyledNoteWrapper = styled.div`
  background: rgba(218,236,234,.8);
  line-height: 3em;
  height: 3em;
  border-radius: 8px;
  display:flex;
  > label{
      display:flex;
      width: 100%;
      align-items: center;
      flex-direction: row;
      padding: 0 4px;
    > input{
      background: inherit;
      width: 50%;
      font-size: 1.4em;
      padding: 6px;
      &:first-child{
      font-size: 1.2em;
      line-height: 1.2em;
      }
      &:last-child{
        text-align: right;
        pointer-events: none;
      }
    }
  }
`;

const MyNote = () => {
  return (
    <StyledNoteWrapper>
      <label>
        <input type="text" placeholder='点击输入备注'/>
        <input type="text" placeholder='100'/>
      </label>
    </StyledNoteWrapper>
  );
};

export {MyNote};