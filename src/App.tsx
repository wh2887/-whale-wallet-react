import React from 'react';
import './App.css';
import styled from 'styled-components';

const StyledButton = styled.button`
  color: red;
`;

function App() {
  return (
    <div>
      <StyledButton>按钮</StyledButton>
    </div>
  );
}

export default App;
