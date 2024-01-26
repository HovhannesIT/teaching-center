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
  .errors {
    color: red;
    margin-top: 10px;
  }
  // move to ui-kit
  .type {
    margin-top: 15px;
    display: flex;
    list-style: none;
    justify-content: space-between;
    li.active {
      background-color: var(--primary);
    }
    li {
      cursor: pointer;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      height: 25px;
      border: 1px solid var(--borders);
    }
    li:first-child {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    li:last-child {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }

  // move to ui-kit
  select {
    width: 100%;
    height: 35px;
    outline: 0;
    border-radius: 5px;
    background-color: var(--main);
    color: var(--primary);
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
