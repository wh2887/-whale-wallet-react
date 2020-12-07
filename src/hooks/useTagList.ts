import React, {useState} from 'react';

type Tag = { id: number, name: string, text: string }

const useTagList = (initTagList: Tag[]) => {
  const [tagList, setTagList] = useState([...initTagList]);
  const findTag = (id: number) => tagList.filter(tag => tag.id === id)[0];
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tagList.length; i++) {
      if (tagList[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };

  const tagInList = (id: number, fn: Function) => {
    if (tagList.indexOf(tagList.filter(item => item.id === id)[0]) >= 0) {
      fn(() => id);
    }
  };
  const updateTag = (tag: Tag, obj: { text: string }) => {
    const {id, name} = tag;
    setTagList(tagList.map(item => item.id === id ? {id, name, text: obj.text} : item));
  };

  const deleteTag = (id: number) => {
    setTagList(tagList.filter(item => item.id !== id));
  };

  return {tagList, findTag, findTagIndex, tagInList, updateTag, deleteTag};
};

export {useTagList};