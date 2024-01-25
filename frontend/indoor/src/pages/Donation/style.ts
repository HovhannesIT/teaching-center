import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  .block {
    display: flex;
    align-items: center;
    img {
      width: 450px;

    }
  }

  .support {
    font-size: 2rem;
    ul {
      list-style: none;
      li {
        span {
          color: var(--primary);
        }
      }
    }
  }
`;
