import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  margin: auto;

  background-color: #97DB88;

  width: 100%;
  height: 70px;
`

export const Input = styled.input`
  width: 300px;
  height: 30px;

  border-radius: 5px;
  border: 1px solid #8ADB91;

  padding: 5px;
`

export const Button = styled.button`
  width: 100px;
  height: 30px;

  border-radius: 5px;
  border: 1px solid #8ADB91;

  &:hover{
    cursor: pointer;
    filter: brightness(0.9);
  }
`
