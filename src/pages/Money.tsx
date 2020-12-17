import React, {FC, useState} from 'react';
import MyLayout from '../components/MyLayout';
import {MyTopBar} from '../components/MyTopBar';
import {MyTags} from './money/MyTags';
import {MyInfoBar} from './money/MyInfoBar';
import {MyNumberPad} from './money/MyNumberPad';


const Money: FC = () => {
  const [selected, setSelected] = useState({
    category: '-' as Category,
    note: '',
    amount: '0'
  });

  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({...selected, ...obj});
  };

  return (
    <>
      <MyLayout>
        <MyTopBar values={selected.category} onChange={category => onChange({category})}/>
        <MyTags toggleLink={false} lastTag='manage' categoryType={selected.category}/>
        <MyInfoBar values={{note: selected.note, amount: selected.amount}} onChange={note => onChange({note})}/>
        <MyNumberPad values={selected.amount} onChange={amount => onChange({amount})}/>
      </MyLayout>
    </>
  );
};

export default Money;