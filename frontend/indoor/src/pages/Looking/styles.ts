import styled from "styled-components";

export const Container = styled.div`
  font-family: Single Day;
  font-size: 2rem;
  color: var(--primary);
  text-align: center;
  font-family: Roboto;
  .collapse {
    padding: 0 10px;
    .acc-content {
      
    }
    p {
      font-size: 0.8rem;
      color: white;
    }
  }
  .actions {
    display: flex;
    padding: 20px 10px;
    height: 70px;
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      width: 200px;
      filter: opacity(0.9);
      &:hover {
        filter: opacity(1);
      }
    }
  }
  .content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    
    margin: 10px;

    @media only screen and (max-width: 1100px) {
      grid-template-columns: 1fr 1fr;
    }
    @media only screen and (max-width: 800px) {
      grid-template-columns: 1fr;
    }
    .type {
      display: flex;
      justify-content: center;
      border-radius: 5px;
      margin-bottom: 10px;
      text-transform: capitalize;
      background-color: var(--primary-private);
      color: black;
      width: 100px;
    }
  }
  .header {
    font-size: 1.2rem;
    height: 30px;
    .content {
      display: flex;
      color: var(--primary);
    }
  }
  .content {
    font-size: 1rem;
    text-align: left;
    color: white;
  }
`;
