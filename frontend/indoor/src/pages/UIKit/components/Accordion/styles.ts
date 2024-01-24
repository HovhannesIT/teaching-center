import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border: 1px solid var(--borders);
  padding: 10px;
  border-radius: 5px;

  .header {
    flex: 1;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .body {
    .action-container {
      cursor: pointer;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      .action {
        color: var(--primary);
      }
    }
  }

  .action {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 30px;
    height: 30px;
  }
`;
