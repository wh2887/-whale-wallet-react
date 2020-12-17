import React, {useEffect, useRef} from 'react';

export const useUpdate = (fn: () => void, deps: any[] | undefined) => {
  const count = useRef(0);
  useEffect(() => {
    count.current += 1;
  });

  useEffect(() => {
    if (count.current > 1) {
      fn();
    }
  }, deps);
};