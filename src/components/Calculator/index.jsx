import React, { Component } from 'react';
import styled from 'styled-components';

import CalculatorResult from '../CalculatorResult';
import CalculatorKeypad from '../CalculatorKeypad';

// style
const Container = styled.div`
  width: 500px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  border-radius: 12px;
  padding: 30px;
  padding-top: 20px;
`;

class Calculator extends Component {
  constructor() {
    super();

    this.state = {
      result: ""
    }
  }

  // keypad click
  onClick = button => {
    if (button === "=") {
      this.calculate()
    } else if (button === "C") {
      this.reset()
    } else if (button === "CE") {
      this.backspace()
    } else if (button === "√") {
      this.calculateSqrt()
    } else {
      this.setState({
        result: this.state.result + button
      })
    }
  };

  // SQRT calculation
  calculateSqrt = () => {
    var checkSqrtResult = ''
    if (this.state.result.includes('--')) {
      checkSqrtResult = this.state.result.replace('--','+')
    } else {
      checkSqrtResult = this.state.result
    }

    try {
      this.setState({
        result: (eval(Math.sqrt(checkSqrtResult)) || "" ) + ""
      })
    } catch (e) {
      this.setState({
        result: "error"
      })
    }
  }

  // general calculation
  calculate = () => {
    var checkResult = ''
    if (this.state.result.includes('--')) {
        checkResult = this.state.result.replace('--','+')
      } else {
        checkResult = this.state.result
      }

      try {
        this.setState({
          result: (eval(checkResult) || "0" ) + ""
        })
      } catch (e) {
        this.setState({
          result: "error"
      })
    }
  };

  // delete
  reset = () => {
    this.setState({
      result: ""
    })
  };

  // delate last input
  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  };

  render() {
    return (
      <Container>
        <CalculatorResult result={this.state.result}/>
        <CalculatorKeypad onClick={this.onClick}/>
      </Container>
    );
  }
};

export default Calculator;