import styled from 'styled-components';

export const Container = styled.div``


export const AppBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  border-bottom: 1px solid var(--borders);
  background-color: var(--black);
  padding: 0 10px;
  ul {
    .icon {
      width: 35px;
      height: 35px;
      background-position: center;
      background-size: contain;
    }
    li.title {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
    }
    display: flex;
    gap: 30px;
    list-style: none;
    align-items: center;
    li {
      cursor: pointer;
      &:hover {
        color: var(--primary);
      }
      
    }
  }
`