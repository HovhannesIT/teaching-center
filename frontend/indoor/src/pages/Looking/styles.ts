import styled from 'styled-components';


export const Container = styled.div`
  font-family: Single Day;
  font-size: 2rem;
  color: var(--primary);
  text-align: center;

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
      filter: opacity(0.9);;
      &:hover {
        filter: opacity(1);
      }
    }
  }
`