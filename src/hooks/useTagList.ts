import React, {useState, useEffect} from 'react';
import {createId} from '../libs/createId';
import {useUpdate} from './useUpdate';

type Tag = { id: number, name: string, text: string }

const useTagList = () => {
  const [tagList, setTagList] = useState<Tag[]>([]);
  useEffect(() => {
    let localTagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
    if (localTagList.length === 0) {
      localTagList = [
        {id: 1, name: 'jiaotong', text: '交通'},
        {id: 2, name: 'huankuan', text: '还款'},
        {id: 3, name: 'gouwu', text: '购物'},
        {id: 4, name: 'yule', text: '娱乐'},
      ];
    }
    setTagList(localTagList);
  }, []);

  useUpdate(() => {
    window.localStorage.setItem('tagList', JSON.stringify(tagList));
  }, [tagList]);


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

  const addTag = (tagName: string, tagText: string) => {
    if (tagName !== null && tagName !== '') {
      setTagList([...tagList, {id: createId(), name: tagName, text: tagText}]);
    }
    console.table(tagList);
    console.log('tagName');
    console.log(tagName);
    console.log('tagText');
    console.log(tagText);
  };

  return {tagList, addTag, findTag, findTagIndex, tagInList, updateTag, deleteTag};
};

export {useTagList};