import React, {FC, useEffect, useState} from 'react';
import MyLayout from '../components/MyLayout';
import {MyTopBar} from '../components/MyTopBar';
import {MyTags} from './money/MyTags';
import {MyInfoBar} from './money/MyInfoBar';
import {MyNumberPad} from './money/MyNumberPad';


type Category = '-' | '+'

const Money: FC = () => {
  const defaultTagList = [
    {id: 1, name: 'jiaotong', text: '交通'},
  ];

  const [selected, setSelected] = useState({
    category: '-' as Category,
    note: '',
    amount: '0'
  });

  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({...selected, ...obj});
  };
  useEffect(() => {
  }, [selected]);

  return (
    <>
      <MyLayout>
        <MyTopBar/>
        <MyTags toggleLink={false} lastTag='manage' defaultCategoryList={defaultTagList}/>
        <MyInfoBar values={{note: selected.note, amount: selected.amount}} onChange={note => onChange({note})}/>
        <MyNumberPad values={selected.amount} onChange={amount => onChange({amount})}/>
      </MyLayout>
    </>
  );
};

export default Money;