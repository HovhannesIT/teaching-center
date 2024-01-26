import styled from "styled-components";

export const Container = styled.div<{
  open: boolean;
}>`
  display: ${({ open }) => open ? 'block' : 'none'};
  position: absolute;
  z-index: 100000;
  background-color: black;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    ul {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      list-style: none;
    }
  }
  .actions {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    button {
      width: 130px;
    }
  }
`;
