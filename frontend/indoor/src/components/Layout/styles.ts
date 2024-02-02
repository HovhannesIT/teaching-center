import styled from "styled-components";

export const Container = styled.div`
 
`;

export const AppBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  border-bottom: 1px solid var(--borders);
  background-color: var(--black);
  padding: 0 10px;

  .private a, .semi-private a {
    color: #eaff60 !important;
    &:hover {
      color: #eaff60 !important;
    }
  }

  .user-type {
    font-size: 1rem;
    text-transform: uppercase;
    background-color: var(--primary-private);
    color: black;
    border-radius: 10px;
    padding: 0 10px;
  }
  .mobile-hamb {
    display: none;
    background-color: #121212;
    color: var(--primary);
  }
  @media only screen and (max-width: 925px) {
    .mobile-hamb {
      display: block;
    }
  }
  ul {
    @media only screen and (max-width: 925px) {
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
        z-index: 1000;
        text-align: left;
        align-items: flex-start;
        padding: 5px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        position: absolute;
        width: 233px;
        background-color: black;
        top: 22px;
        left: -4px;
        border-radius: 5px;
      }
    }
  }
`;
