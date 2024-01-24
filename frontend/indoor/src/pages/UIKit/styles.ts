import styled from "styled-components";

export const Container = styled.div`
  max-width: 900px;
  margin: 30px auto 50px auto;

  h1 {
    text-align: center;
  }

  ul {
    display: flex;
    flex-direction: column;
    max-width: 200px;
    gap: 20px;
  }

  .section {
    .states {
      display: flex;
      flex-direction: column;
      gap: 10px
    }
  }
`