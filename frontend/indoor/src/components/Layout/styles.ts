import styled from "styled-components";

export const Container = styled.div``;

export const AppBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  border-bottom: 1px solid var(--borders);
  background-color: var(--black);
  padding: 0 10px;
  .mobile-hamb {
    display: none;
    background-color: #121212;
    color: var(--primary);
  }
  @media only screen and (max-width: 810px) {
    .mobile-hamb {
      display: block;
    }
  }
  ul {
    @media only screen and (max-width: 810px) {
      &.desktop-nav {
        display: none;
      }
    }
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

    li.user {
      position: relative;
      display: flex;
      gap: 5px;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      &:hover {
        color: white;
      }
      ul.closed {
        display: none;
      }
      ul {
        text-align: left;
        align-items: flex-start;
        padding: 5px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        position: absolute;
        width: 100px;
        background-color: black;
        top: 22px;
        left: -4px;
        border-radius: 5px;
      }
    }
  }
`;
