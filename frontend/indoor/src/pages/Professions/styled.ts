import styled from 'styled-components';


export const Container = styled.div`
  margin: 0 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin-top: 10px;
`

export const CartContent = styled.div`
  .title {
    font-size: 1.5rem;
    color: var(--primary);
  }

  .description {
    margin-top: 20px;
    font-size: 1rem;
  }
`