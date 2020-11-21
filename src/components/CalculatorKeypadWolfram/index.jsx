import React, { useState } from 'react';
import { connect } from "react-redux";

import { 
  Container, 
  ButtonOperator, 
  ButtonOperatorMain, 
  ButtonDigits,
  Column,
  ColumnTwo
} from './styles';


import getWolframResult from '../../redux/module/wolframResult/wolframResultAction';


const CalculatorKeypadWolfram = ({ getWolframResult }) => {
  const [calculationInputs, setCalculationInputs] = useState({});

  // handles inputing values (digits)
  const handleInputValue = (e) => {
    e.persist();

    setCalculationInputs(e.target.name);
  };

  // handles inputs evaluation
  const handleEvaluate = () => {
    getWolframResult(calculationInputs);
  };

  return (
    <Container>
        <ButtonOperator name="(" onClick={handleInputValue}>(</ButtonOperator>
        <ButtonOperator name="CE" >CE</ButtonOperator>
        <ButtonOperator name=")" onClick={handleInputValue}>)</ButtonOperator>
        <ButtonOperator name="C" >C</ButtonOperator><br/>
      <Column>
        <ButtonDigits name="1" onClick={handleInputValue}>1</ButtonDigits>
        <ButtonDigits name="4" onClick={handleInputValue}>4</ButtonDigits>
        <ButtonDigits name="7" onClick={handleInputValue}>7</ButtonDigits>
        <ButtonDigits name="." onClick={handleInputValue}>.</ButtonDigits>
      </Column>
      <Column>
        <ButtonDigits name="2" onClick={handleInputValue}>2</ButtonDigits>
        <ButtonDigits name="5" onClick={handleInputValue}>5</ButtonDigits>
        <ButtonDigits name="8" onClick={handleInputValue}>8</ButtonDigits>
        <ButtonDigits name="0" onClick={handleInputValue}>0</ButtonDigits>
      </Column>
      <Column>
        <ButtonDigits name="3" onClick={handleInputValue}>3</ButtonDigits>
        <ButtonDigits name="6" onClick={handleInputValue}>6</ButtonDigits>
        <ButtonDigits name="9" onClick={handleInputValue}>9</ButtonDigits>
        <ButtonDigits name="=" onClick={handleEvaluate}>=</ButtonDigits>
      </Column>
      <ColumnTwo>
        <ButtonOperatorMain name="+" onClick={handleInputValue}>+</ButtonOperatorMain><br/>
        <ButtonOperatorMain name="-" onClick={handleInputValue}>-</ButtonOperatorMain><br/>
        <ButtonOperatorMain name="*" onClick={handleInputValue}>x</ButtonOperatorMain><br/>
        <ButtonOperatorMain name="/" onClick={handleInputValue}>÷</ButtonOperatorMain><br/>
        <ButtonOperatorMain name="√" onClick={handleInputValue}>√</ButtonOperatorMain><br/>
      </ColumnTwo>
    </Container>
  );
};


const mapDispatchToProps = (dispatch) => ({
  getWolframResult: (calculationInputs) => dispatch(getWolframResult(calculationInputs))
});


export default connect(null, mapDispatchToProps)(CalculatorKeypadWolfram);