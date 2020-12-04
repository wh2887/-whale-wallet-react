import React, {useState} from 'react';

type Tag = { id: number, name: string, text: string }

const useTagList = (initTagList: Tag[]) => {
  const [tagList] = useState(
    [
      ...initTagList
    ]
  );
  return {tagList};
};

export {useTagList};