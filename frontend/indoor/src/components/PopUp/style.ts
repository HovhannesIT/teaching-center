import styled from "styled-components";

export const Container = styled.div<{ visible: boolean }>`
  position: absolute;
  z-index: 10000;
  display: ${({ visible }) => (visible ? "block" : "none")};

  .blur {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: rgba(18, 18, 18, 0.6);
  }
  .confirmation {
    border: 1px solid var(--borders);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    position: relative;
    top: calc(50% - (200px / 2));
    left: calc(50% - (360px / 2));
    width: 360px;
    height: 200px;
    background-color: black;
    border-radius: 10px;
    padding: 15px 0;
    .content {
      p {
        margin: 10px 0;
      }
    }
    .actions {
      display: flex;
      justify-content: center;
      button {
        width: 100px;
      }
    }
  }
`;
