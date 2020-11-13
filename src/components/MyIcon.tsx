import React, {FC} from 'react';
import styled from 'styled-components';

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('../icons', true, /\.svg$/));} catch (error) {console.log(error);}

type Props = {
  name: string,
  size?: string,
}


const StyledSvgWrapper = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
`;


const MyIcon: FC<Props> = ({name = '', size = '1em'}) => {
  return (
    <StyledSvgWrapper className="svg-wrapper">
      <svg className="icon" width={size} height={size}>
        <use xlinkHref={'#' + name}/>
      </svg>
    </StyledSvgWrapper>
  );
};

export default MyIcon;