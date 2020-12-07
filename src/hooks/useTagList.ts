import React, {useState} from 'react';

type Tag = { id: number, name: string, text: string }

const useTagList = (initTagList: Tag[]) => {
  const [tagList] = useState([...initTagList]);
  const findTag = (id: number) => tagList.filter(tag => tag.id === id)[0];
  const tagInList = (id: number, fn: Function) => {
    if (tagList.indexOf(tagList.filter(item => item.id === id)[0]) >= 0) {
      fn(() => id);
    }
  };
  return {tagList, findTag, tagInList};
};

export {useTagList};