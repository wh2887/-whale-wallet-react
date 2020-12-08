import React, {useState, useEffect} from 'react';
import {createId} from '../libs/createId';
import {useUpdate} from './useUpdate';

type Tag = { id: number, name: string, text: string }

const useCategoryList = () => {
  const [categoryList, setCategoryList] = useState<Tag[]>([]);
  useEffect(() => {
    let localCategoryList = JSON.parse(window.localStorage.getItem('categoryList') || '[]');
    if (localCategoryList.length === 0) {
      localCategoryList = [
        {id: 1, name: 'jiaotong', text: '交通'},
        {id: 2, name: 'huankuan', text: '还款'},
        {id: 3, name: 'gouwu', text: '购物'},
        {id: 4, name: 'yule', text: '娱乐'},
      ];
    }
    setCategoryList(localCategoryList);
  }, []);

  useUpdate(() => {
    window.localStorage.setItem('categoryList', JSON.stringify(categoryList));
  }, [categoryList]);


  const findCategory = (id: number) => categoryList.filter(tag => tag.id === id)[0];
  const findCategoryIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < categoryList.length; i++) {
      if (categoryList[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };

  const categoryInList = (id: number, fn: Function) => {
    if (categoryList.indexOf(categoryList.filter(item => item.id === id)[0]) >= 0) {
      fn(() => id);
    }
  };
  const updateCategory = (tag: Tag, obj: { text: string }) => {
    const {id, name} = tag;
    setCategoryList(categoryList.map(item => item.id === id ? {id, name, text: obj.text} : item));
  };

  const deleteCategory = (id: number) => {
    setCategoryList(categoryList.filter(item => item.id !== id));
  };

  const addCategory = (tagName: string, tagText: string) => {
    if (tagName !== null && tagName !== '') {
      setCategoryList([...categoryList, {id: createId(), name: tagName, text: tagText}]);
    }
    console.table(categoryList);
    console.log('tagName');
    console.log(tagName);
    console.log('tagText');
    console.log(tagText);
  };
  return {categoryList, addCategory, deleteCategory, updateCategory, findCategory, findCategoryIndex, categoryInList,};
};

export {useCategoryList};