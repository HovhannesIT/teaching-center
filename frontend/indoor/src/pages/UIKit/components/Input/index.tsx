import styled from 'styled-components';


export const Input = styled.input`
  background-color: var(--main);
  border: 1px solid var(--borders);
  border-radius: 5px;
  height: 30px;
  color: var(--text);
  outline: 0;

  &:focus {
    border-color: white;
  }
`