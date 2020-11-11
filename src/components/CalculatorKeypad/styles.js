import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ButtonOperator = styled.button`
  width: 23%;
  height: 65px;
  border: none;
  background-color: grey;
  color: white;
  font-size: 22px;
  font-weight: 500;
  cursor: pointer;
  margin: 2px;
  transition: 0.5s;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: orange;
  }
`;

export const Column = styled.div`
  width: 23%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 2px;
  margin-left: 2px;
`;

export const ColumnTwo = styled.div`
  width: 23%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-right: 2px;
  margin-left: 2px;
`;

export const ButtonOperatorMain = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  background-color: orange;
  color: white;
  font-size: 22px;
  font-weight: 500;
  cursor: pointer;
  margin: 2px;
  transition: 0.5s;
  margin-bottom: -15px;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: black;
  }
`;


export const ButtonDigits = styled.button`
  width: 100%;
  height: 65px;
  border: none;
  background-color: #171717;
  color: white;
  font-size: 22px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 2px;
  margin-bottom: 2px;
  transition: 0.5s;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: grey;
  }
`;