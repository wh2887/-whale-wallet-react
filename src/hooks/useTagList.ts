import React, {useState} from 'react';

type Tag = { id: number, name: string, text: string }

const useTagList = (initTagList: Tag[]) => {
  const [tagList] = useState([...initTagList]);
  const findTag = (id: number) => tagList.filter(tag => tag.id === id)[0];
  return {tagList, findTag};
};

export {useTagList};