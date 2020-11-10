import React from 'react';
import styled from 'styled-components';

import Calculator from './components/Calculator';

const Container = styled.div`
  width: 100vw;
  height: 110vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2d3436;
`;

const App = () => (
  <Container>
    <Calculator />
  </Container>
);

export default App;