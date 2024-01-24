import styled from 'styled-components';


export const Container = styled.div`
  .title {
    font-size: 2.5rem;
    margin-left: 10px;
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