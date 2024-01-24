import styled from "styled-components";

export const Container = styled.button<{theme: string}>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  color: var(--text);
  background-color: var(--${({ theme }) => theme});
  border-radius: 10px;
  .loading {
    margin-left: 5px;
    animation: rotate 2s normal linear infinite;
  }
`;
