import React, {FC} from 'react';
import styled from 'styled-components';

const gap = '10px'

const StyledNumberPadWrapper = styled.div`
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  background: rgba(218,236,234,.8);
  border: 1px solid #68B0AB;
  border-radius: 12px;
  max-height: 320px;
  > button{
    box-sizing: content-box;
    display: inline-block;
    line-height: 4;
    background: white;
    border: 1px solid #68B0AB;
    border-radius: 8px;
    width: calc((100% - ${parseInt(gap)*5}px) / 4);
    margin: ${parseInt(gap) / 2}px;
    &:active{
      background: #68B0AB;
      color: white;
    }
  }
`;

type NumberPadProps = {
    className?:string
}

const MyNumberPad:FC<NumberPadProps> = () => {
  return (
    <StyledNumberPadWrapper>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>今日</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>0</button>
      <button>.</button>
      <button>清除</button>
      <button>完成</button>
    </StyledNumberPadWrapper>
  );
};

export {MyNumberPad};