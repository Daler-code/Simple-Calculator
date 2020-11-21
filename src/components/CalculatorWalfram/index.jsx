import React from 'react';
import styled from 'styled-components';

import CalculatorResultWalfram from '../CalculatorResultWalfram';
import CalculatorKeypadWalfram from '../CalculatorKeypadWalfram';

// style
const Container = styled.div`
  width: 500px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 12px;
  padding: 30px;
  padding-top: 20px;
`;

const CalculatorWalfram = () => {
  return (
    <Container>
      <CalculatorResultWalfram />
      <CalculatorKeypadWalfram />
    </Container>
  );
};

export default CalculatorWalfram;