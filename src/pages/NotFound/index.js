import React from 'react';
import styled from 'styled-components';

import PageDefault from '../../components/PageDefault';

import image from '../../assets/img/notFound.png';

const Surround = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 

`;

function PageNotFound() {
  return (
    <PageDefault>
      <Surround>
        <img src={image} alt="https://stories.freepik.com/web" width="600px" />
      </Surround>
    </PageDefault>
  );
}

export default PageNotFound;
