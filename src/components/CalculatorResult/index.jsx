import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 90%;
  height: 130px;
  background-color: balck;
  color:  #e48800;
  font-size: 25px;
  font-weight: 400;
  padding-left: 20px;
  border-radius: 15px;
  border: 2px solid grey;
  margin-bottom: 20px;
`;


const CalculatorResult = ({ result }) => {

  return (
    <Container>
      <p>{result}</p>
    </Container>
  )
};

export default CalculatorResult;