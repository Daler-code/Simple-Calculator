import React from 'react';

import { 
  Container, 
  ButtonOperator, 
  ButtonOperatorMain, 
  ButtonDigits, 
  ButtonOperatorsLong 
} from './styles';

const CalculatorKeypad = ({ onClick }) => {

  return (
    <Container>
        <ButtonOperator name="(" onClick={e => onClick(e.target.name)}>(</ButtonOperator>
        <ButtonOperator name="CE" onClick={e => onClick(e.target.name)}>CE</ButtonOperator>
        <ButtonOperator name=")" onClick={e => onClick(e.target.name)}>)</ButtonOperator>
        <ButtonOperator name="C" onClick={e => onClick(e.target.name)}>C</ButtonOperator><br/>

        <ButtonDigits name="1" onClick={e => onClick(e.target.name)}>1</ButtonDigits>
        <ButtonDigits name="2" onClick={e => onClick(e.target.name)}>2</ButtonDigits>
        <ButtonDigits name="3" onClick={e => onClick(e.target.name)}>3</ButtonDigits>
        <ButtonOperatorMain name="+" onClick={e => onClick(e.target.name)}>+</ButtonOperatorMain><br/>

        <ButtonDigits name="4" onClick={e => onClick(e.target.name)}>4</ButtonDigits>
        <ButtonDigits name="5" onClick={e => onClick(e.target.name)}>5</ButtonDigits>
        <ButtonDigits name="6" onClick={e => onClick(e.target.name)}>6</ButtonDigits>
        <ButtonOperatorMain name="-" onClick={e => onClick(e.target.name)}>-</ButtonOperatorMain><br/>

        <ButtonDigits name="7" onClick={e => onClick(e.target.name)}>7</ButtonDigits>
        <ButtonDigits name="8" onClick={e => onClick(e.target.name)}>8</ButtonDigits>
        <ButtonDigits name="9" onClick={e => onClick(e.target.name)}>9</ButtonDigits>
        <ButtonOperatorMain name="*" onClick={e => onClick(e.target.name)}>x</ButtonOperatorMain><br/>

        <ButtonDigits name="." onClick={e => onClick(e.target.name)}>.</ButtonDigits>
        <ButtonDigits name="0" onClick={e => onClick(e.target.name)}>0</ButtonDigits>
        <ButtonOperatorMain name="=" onClick={e => onClick(e.target.name)}>=</ButtonOperatorMain>
        <ButtonOperatorMain name="/" onClick={e => onClick(e.target.name)}>÷</ButtonOperatorMain><br/>
        <ButtonOperatorsLong name="Sqrt" onClick={e => onClick(e.target.name)}>Sqrt</ButtonOperatorsLong><br/>
        <ButtonOperatorsLong name="x^y" onClick={e => onClick(e.target.name)}>x^y</ButtonOperatorsLong><br/>
    </Container>
  );
};


export default CalculatorKeypad;