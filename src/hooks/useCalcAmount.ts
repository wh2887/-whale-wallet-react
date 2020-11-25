import React, {useState} from 'react';

const useCalcAmount = () => {
  const [left, setLeft] = useState('0');
  const [operator, setOperator] = useState('');
  const [right, setRight] = useState('');

  const add = (value: string) => {
    if ('0123456789'.indexOf(value) >= 0) {
      addNumber(value);
    } else if (value === '.') {
      addDot();
    } else if ('+-'.indexOf(value) >= 0) {
      addOperator(value);
    }
  };


  const addNumber = (value: string) => {
    const reg = /\.\d{2,}/;
    if (operator) {
      if (reg.test(right)) return;
      if (right === '0') {
        setRight(value);
      } else {
        setRight(right + value);
      }
    } else {
      if (reg.test(left)) return;
      if (left === '0') {
        setLeft(value);
      } else {
        setLeft(left + value);
      }
    }
  };

  const addDot = () => {
    if (operator) {
      if (right.indexOf('.') !== -1) return;
      if (right.length === 0) {
        setRight('0.');
      } else {
        setRight(right + '.');
      }
    } else {
      if (left.indexOf('.') !== -1) return;
      setLeft(left + '.');
    }
  };

  const getValue = () => {
    let result: number;
    if (operator === '+') {
      result = +left + +right;
    } else {
      result = +left - +right;
    }
    setLeft(result.toFixed(2).replace(/\.00$/, ''));
    setRight('');
    setOperator('');
    return result;
  };
  const addOperator = (operator: string) => {
    if (right.length !== 0) {
      getValue();
    }
    setOperator(operator);
  };

  const clear = () => {
    if (right) {
      setRight(right.slice(0, -1));
    } else if (operator) {
      setOperator('');
    } else if (left.length > 1) {
      setLeft(left.slice(0, -1));
    } else {
      setLeft('0');
    }
  };

  const expStr = left + operator + right;
  return {expStr, add, clear, getValue,};
};


export {useCalcAmount};