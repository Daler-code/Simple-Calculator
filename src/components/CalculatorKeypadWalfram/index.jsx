import React from 'react';

import { 
  Container, 
  ButtonOperator, 
  ButtonOperatorMain, 
  ButtonDigits,
  Column,
  ColumnTwo
} from './styles';

const CalculatorKeypadWalfram = () => {

  return (
    <Container>
        <ButtonOperator name="(" >(</ButtonOperator>
        <ButtonOperator name="CE" >CE</ButtonOperator>
        <ButtonOperator name=")" >)</ButtonOperator>
        <ButtonOperator name="C" >C</ButtonOperator><br/>
      <Column>
        <ButtonDigits name="1" >1</ButtonDigits>
        <ButtonDigits name="4" >4</ButtonDigits>
        <ButtonDigits name="7" >7</ButtonDigits>
        <ButtonDigits name="." >.</ButtonDigits>
      </Column>
      <Column>
        <ButtonDigits name="2" >2</ButtonDigits>
        <ButtonDigits name="5" >5</ButtonDigits>
        <ButtonDigits name="8" >8</ButtonDigits>
        <ButtonDigits name="0" >0</ButtonDigits>
      </Column>
      <Column>
        <ButtonDigits name="3" >3</ButtonDigits>
        <ButtonDigits name="6" >6</ButtonDigits>
        <ButtonDigits name="9" >9</ButtonDigits>
        <ButtonDigits name="=" >=</ButtonDigits>
      </Column>
      <ColumnTwo>
        <ButtonOperatorMain name="+" >+</ButtonOperatorMain><br/>
        <ButtonOperatorMain name="-" >-</ButtonOperatorMain><br/>
        <ButtonOperatorMain name="*" >x</ButtonOperatorMain><br/>
        <ButtonOperatorMain name="/" >÷</ButtonOperatorMain><br/>
        <ButtonOperatorMain name="√" >√</ButtonOperatorMain><br/>
      </ColumnTwo>
    </Container>
  );
};


export default CalculatorKeypadWalfram;