import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  margin: 10px auto;
  h3 {
    color: var(--primary);
    text-align: center;
    font-size: 1.4rem;
    margin: 5px 0;
  }
  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-top: 20px;
  }
  > form > div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    input {
      height: 25px;
    }
    .cart {
      label {
        display: block;
        margin-bottom: 5px;
        font-size: 0.7rem;
      }
      input {
        width: 100%;
      }
      button {
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
