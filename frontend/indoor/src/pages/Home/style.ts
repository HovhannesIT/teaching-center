import styled from 'styled-components';


export const Container = styled.div`
  font-family: Single Day;
  .title {
    font-size: 2.5rem;
    color: var(--primary);
  }
  > div {
    section {
      display: flex;
      align-items: center;
      p {
        text-align: justify;
        width: 500px;
        font-size: 1.5rem;
      }
      img {
        height: 250px;
      }
      &:last-child {
        display: flex;
        flex-direction: row-reverse;
        
      }
    }
  }
`