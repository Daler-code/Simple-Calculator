import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
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

export const ButtonOperatorMain = styled.button`
  width: 23%;
  height: 65px;
  border: none;
  background-color: orange;
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
    background-color: black;
  }
`;


export const ButtonDigits = styled.button`
  width: 23%;
  height: 65px;
  border: none;
  background-color: #171717;
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
    background-color: grey;
  }
`;

export const ButtonOperatorsLong = styled.button`
  width: 47%;
  height: 65px;
  border: none;
  background-color: orange;
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
    background-color: black;
  }
`;