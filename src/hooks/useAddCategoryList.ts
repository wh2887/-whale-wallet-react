import React, {useState, useEffect} from 'react';
import {createId} from '../libs/createId';
import {useUpdate} from './useUpdate';

const useAddCategoryList = () => {
  const [addCategoryList, setAddCategoryList] = useState<CategoryItem[]>([]);
  useEffect(() => {
    let addCategoryList = JSON.parse(window.localStorage.getItem('addCategoryList') || '[]');
    if (addCategoryList.length === 0) {
      addCategoryList = [
        {id: createId('+'), name: 'jijin', text: '基金'},
        {id: createId('+'), name: 'hongbao', text: '红包'},
        {id: createId('+'), name: 'tuikuan', text: '退款'},
      ];
    }
    setAddCategoryList(addCategoryList);
  }, []);
  useUpdate(() => {
    window.localStorage.setItem('addCategoryList', JSON.stringify(addCategoryList));
  }, [addCategoryList]);

  return {addCategoryList, setAddCategoryList};
};

export {useAddCategoryList};