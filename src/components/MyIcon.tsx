import React from 'react';
import styled from 'styled-components';
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('../icons', true, /\.svg$/));} catch (error) {console.log(error);}

type Props = {
  name: string
}


const StyledSvgWrapper = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
    width: 26px;
    height: 29px;
`


const MyIcon = (props: Props) => {
  return (
    <StyledSvgWrapper className="svg-wrapper">
      <svg className="icon">
        <use xlinkHref={'#' + props.name}/>
      </svg>
    </StyledSvgWrapper>
  );
};

export default MyIcon;