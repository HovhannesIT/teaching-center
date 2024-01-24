import styled from 'styled-components';


export const Container = styled.div``;
export const PopUP = styled.div`
  width: 250px;
  background-color: var(--main);
  .controller {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .action {
      cursor: pointer;
      width: 20px;
      height: 20px;
      svg {
        color: var(--primary);
        border-radius: 10px;
      }
    }
    .selection {
      cursor: pointer;
      display: flex;
      font-size: 12px;
      gap: 20px;
      > div {
        border: 1px solid var(--borders);
        padding: 5px;
        border-radius: 10px;
        &.selected {
          border: 1px solid var(--primary);
        }
      }
    }
  }
  .calendar {
    display: grid;
    text-align: center;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 5px;
    height: 175px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    > div {
      flex: 0 0 35px;
      cursor: pointer;
      width: 31px;
      height: 31px;
      padding: 5px;
      border: 1px solid var(--secondary);
      border-radius: 50%;
      &.selected {
        border: 1px solid var(--primary);
      }
    }
  }
`