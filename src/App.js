import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import { Radio } from 'antd';

import Calculator from './components/Calculator';
import CalculatorWolfram from './components/CalculatorWolfram';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2d3436;
`;

const Row = styled.div`
 width: 100%;
 height: fit-content;
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: flex-end;
 background-color: #2d3436;
 padding-top: 20px;
 padding-right: 20px;
`;

const BtnStyle = {
  marginRight: '20px',
  backgroundColor: 'transparent'
}

const App = () => {
  const [toggleBtn, setToggleBtn] = useState(false)

  return (
    <Fragment>
      <Row> 
        <Radio.Group>
          <Radio.Button 
            style={BtnStyle} 
            onClick={() => setToggleBtn(false)}
          >
            Native App
          </Radio.Button>
          <Radio.Button 
            style={BtnStyle} 
            onClick={() => setToggleBtn(true)}
          >
            Wolphram App
          </Radio.Button>
        </Radio.Group>
      </Row>
      <Container>
        {
          !toggleBtn ? (
            <Calculator />
          ) : (
            <CalculatorWolfram />
          )
        }
      </Container>
    </Fragment>
  )
};


export default App;