import React from 'react';
import styled from 'styled-components';

const Spinner = styled.div`

  border: 8px solid rgba(0,0,0, .1);
  border-left-color: #22a6b3;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  animation: spin 1s linear infinite;
    
  @keyframes spin{
    to{transform: rotate(360deg);}
  }
`;

const SurroundSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
  min-height: 60vh;
`;

function Loader() {
  return (
    <SurroundSpinner>
      <Spinner />
    </SurroundSpinner>

  );
}

export default Loader;
