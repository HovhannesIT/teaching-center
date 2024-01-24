import styled from "styled-components";
import { PropsI } from "./types";

export const Container = styled.button<PropsI>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  color: var(--text);
  background-color: var(--${({ type }) => type});
  border-radius: 10px;
  .loading {
    margin-left: 5px;
    animation: rotate 2s normal linear infinite;
  }
`;
