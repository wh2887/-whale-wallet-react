import React, {FC, useEffect, useState} from 'react';
import MyLayout from '../components/MyLayout';
import {MyTopBar} from '../components/MyTopBar';
import {MyTags} from './money/MyTags';
import {MyInfoBar} from './money/MyInfoBar';
import {MyNumberPad} from './money/MyNumberPad';


type Category = '-' | '+'

const Money: FC = () => {
  const [selected, setSelected] = useState({
    category: '-' as Category,
    note: '',
    amount: 0
  });

  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({...selected, ...obj});
  };
  useEffect(() => {
    console.log(selected);
  }, [selected]);

  return (
    <>
      <MyLayout>
        <MyTopBar/>
        <MyTags/>
        <MyInfoBar note={selected.note} onChange={note => onChange({note})}/>
        <MyNumberPad/>
      </MyLayout>
    </>
  );
};

export default Money;