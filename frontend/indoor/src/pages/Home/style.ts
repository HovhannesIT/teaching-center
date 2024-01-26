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
        @media only screen and (max-width: 830px) {
          width: 100%;
          margin: 10px 0;
          font-size: 20px;
        }
        width: 500px;
        font-size: 1.5rem;
      }
      img {
        @media only screen and (max-width: 610px) {
          display: none;
        }
        @media only screen and (max-width: 830px) {
          height: 150px;
        }
        height: 250px;
      }
      &:last-child {
        display: flex;
        flex-direction: row-reverse;
      }
    }
  }
`