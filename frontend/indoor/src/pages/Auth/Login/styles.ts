import styled from "styled-components";

export const Container = styled.div`
  width: 360px;
  margin: 10px auto;
  .errors {
    color: red;
    margin-top: 10px;
  }
  h3 {
    color: var(--primary);
    text-align: center;
    font-size: 1.4rem;
    margin: 5px 0;
  }
  > form > div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .cart {
      label {
        display: block;
        margin-bottom: 5px;
        font-size: 1.1rem;
      }
      input {
        width: 100%;
      }
    }
    .action {
      display: flex;
      justify-content: flex-end;
      button {
        width: 150px;
      }
    }
  }
`;
