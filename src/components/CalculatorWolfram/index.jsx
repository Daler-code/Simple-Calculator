import React from 'react';
import styled from 'styled-components';

import CalculatorResultWolfram from '../CalculatorResultWolfram';
import CalculatorKeypadWolfram from '../CalculatorKeypadWolfram';

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


const CalculatorWolfram = () => {
  return (
    <Container>
      <CalculatorResultWolfram />
      <CalculatorKeypadWolfram />
    </Container>
  );
};

export default CalculatorWolfram;