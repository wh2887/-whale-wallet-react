import React, {FC, useRef} from 'react';
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
    > span{
      width: 50%;
      text-align: right;
      padding: 6px;
      font-size: 1.4em;
      overflow: auto;
    }
  }
`;

type Prop = {
  values: {
    note: string,
    amount: string
  },
  onChange: (value: string) => void
}

const MyInfoBar: FC<Prop> = (props) => {
  const {values, onChange} = props;
  const refInput = useRef<HTMLInputElement>(null);


  const onBlur = () => {
    if (refInput.current !== null) {
      onChange(refInput.current.value);
    }
  };

  return (
    <StyledNoteWrapper>
      <label>
        <input type="text" placeholder='点击输入备注' defaultValue={values.note} ref={refInput} onBlur={onBlur}/>
        <span>{values.amount}</span>
      </label>
    </StyledNoteWrapper>
  );
};
export {MyInfoBar};