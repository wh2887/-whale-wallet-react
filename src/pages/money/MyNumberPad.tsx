import React, {FC} from 'react';
import styled from 'styled-components';
import {generateOutput} from '../../helpers/generateOutput';

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
  value: number,
  onChange: (value: number) => void
}

const MyNumberPad: FC<Props> = (props) => {
  const {value, onChange} = props;
  const output = value.toString();
  const setOutput = (output: string) => {
    let values;
    if (output.length > 16) {
      values = parseFloat(output.slice(0, 16));
    } else if (output.length === 0) {
      values = 0;
    } else {
      values = parseFloat(output);
    }
    onChange(values);
  };

  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) return;
    if ('0123456789'.split('').concat(['删除']).indexOf(text) >= 0) {
      setOutput(generateOutput(text, output));
    }
  };
  return (
    <StyledNumberPadWrapper onClick={onClickButtonWrapper}>
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
      <button>.</button>
      <button>0</button>
      <button>删除</button>
      <button>完成</button>
    </StyledNumberPadWrapper>
  );
};

export {MyNumberPad};