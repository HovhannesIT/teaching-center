import styled from "styled-components";

export const Container = styled.div`
  margin: 0 10px;

  > div {
    max-width: 400px;
    margin: 20px auto;
  }
  
  h3 {
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    
    margin: 20px auto;

    .cart {
      label {
        display: flex;
        margin-bottom: 5px;
      }
      display: flex;
      flex-direction: column;
    }
  }
`;