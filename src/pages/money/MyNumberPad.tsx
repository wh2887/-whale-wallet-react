import React, {FC, useEffect} from 'react';
import styled from 'styled-components';
import {useCalcAmount} from '../../hooks/useCalcAmount';

const gap = '10px';
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
    width: calc((100% - ${parseInt(gap) * 5}px) / 4);
    margin: ${parseInt(gap) / 2}px;
    &:active{
      background: #68B0AB;
      color: white;
    }
  }
`;

type Props = {
  values: string,
  onChange: (amount: string) => void
}

type Operator = '+' | '-'

const MyNumberPad: FC<Props> = (props) => {
  const {values, onChange} = props;
  const {expStr, add, clear} = useCalcAmount();
  useEffect(() => {
    onChange(expStr);
  }, [values, expStr]);


  const onNumberClick = (buttonText: string) => {
    add(buttonText);
  };

  const onOperatorClick = (operator: Operator) => {
    add(operator);
  };

  const onClear = () => {
    clear();
  };
  return (
    <StyledNumberPadWrapper>
      <button onClick={() => onNumberClick('1')}>1</button>
      <button onClick={() => onNumberClick('2')}>2</button>
      <button onClick={() => onNumberClick('3')}>3</button>
      <button onClick={() => onNumberClick('今日')}>今日</button>
      <button onClick={() => onNumberClick('4')}>4</button>
      <button onClick={() => onNumberClick('5')}>5</button>
      <button onClick={() => onNumberClick('6')}>6</button>
      <button onClick={() => onOperatorClick('+')}>+</button>
      <button onClick={() => onNumberClick('7')}>7</button>
      <button onClick={() => onNumberClick('8')}>8</button>
      <button onClick={() => onNumberClick('9')}>9</button>
      <button onClick={() => onOperatorClick('-')}>-</button>
      <button onClick={() => onNumberClick('.')}>.</button>
      <button onClick={() => onNumberClick('0')}>0</button>
      <button onClick={onClear}>回退</button>
      <button onClick={() => onNumberClick('完成')}>完成</button>
    </StyledNumberPadWrapper>
  );
};

export {MyNumberPad};