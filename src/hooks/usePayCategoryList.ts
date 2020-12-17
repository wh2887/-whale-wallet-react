import React, {useState, useEffect} from 'react';
import {createId} from '../libs/createId';
import {useUpdate} from './useUpdate';

const usePayCategoryList = () => {
  const [payCategoryList, setPayCategoryList] = useState<CategoryItem[]>([]);
  useEffect(() => {
    let addCategoryList = JSON.parse(window.localStorage.getItem('payCategoryList') || '[]');
    if (addCategoryList.length === 0) {
      addCategoryList = [
        {id: createId('-'), name: 'jiaotong', text: '交通'},
        {id: createId('-'), name: 'gouwu', text: '购物'},
        {id: createId('-'), name: 'game', text: '游戏'},
      ];
    }
    setPayCategoryList(addCategoryList);
  }, []);
  useUpdate(() => {
    window.localStorage.setItem('payCategoryList', JSON.stringify(payCategoryList));
  }, [payCategoryList]);

  return {payCategoryList, setAddCategoryList: setPayCategoryList};
};

export {usePayCategoryList};