import React, {FC} from 'react';
import styled from 'styled-components';

const StyledTagsWrapper = styled.div`
flex-grow: 1;
`

type TagProps = {
  className?:string
}

const MyTags:FC<TagProps> = () => {
  return (
    <StyledTagsWrapper>
      Tags
    </StyledTagsWrapper>
  );
};

export {MyTags};