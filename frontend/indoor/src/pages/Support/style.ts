import styled from "styled-components";

export const PopUpContainer = styled.div`
  text-align: center;
  font-size: 2rem;
`;

export const Container = styled.div`
  &.sec{
    display: flex;
    justify-content: flex-end;

    .block {
      img {
        width: 250px;
      }
    }
  }
  margin: 0 10px;
  .help-image,
  .suggest-image {
    position: absolute;
    z-index: -2;
    background-position: center;
    background-size: cover;
    width: 400px;
    height: 400px;
    filter: opacity(0.2);
  }
  .suggest-image {
    right: 0;
  }
  .title {
    font-size: 1.6rem;
    font-family: Single Day;
    color: var(--primary);
  }
  > div {
    display: flex;
    &:last-child {
      justify-content: flex-end;
    }
  }
  section {
    margin: 40px 30px;
    div {
      width: 100%;
      form {
        display: flex;
        flex-direction: column;
        width: 100%;
        textarea {
          min-height: 125px;
          margin-top: 10px;
          outline: 0;
          background-color: var(--black);
          border-radius: 5px;
          resize: none;
          border-color: var(--borders);
          font-family: Roboto;
          color: white;
          font-size: 1rem;
          padding: 5px;
          &:focus {
            border-color: white;
          }
        }
        div.reversed {
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
        }
        button {
          margin-top: 10px;
          height: 30px;
          width: 300px;
          background-color: var(--primary);
          color: white;
          font-size: 1.2rem;
          font-family: Single Day;
          border-radius: 5px;
        }
      }
    }
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      margin: 0;
    }
  }

  .support {
    display: block;
    margin-right: 30px;
    justify-content: left;
    p {
      margin: 0;
      text-align: justify;
    }

    ul {
      margin: 10px 0 0 0;
      padding-left: 0;
      font-size: 10px;
      list-style: none;
    }

    ul li {
      margin: 0 !important;
    }

    ul li span {
      color: #1a9811;
    }
  }
`;
