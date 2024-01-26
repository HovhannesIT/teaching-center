import Icon from "./Icon.png";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { CompT } from "./types";
import { Container, AppBarContainer } from "./styles";
import { Link } from "react-router-dom";

import { UserStore } from "../../store/user";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";
import { logout } from "../../rest-api";
import { MobileMenu } from "../MobileMenu";

import { GiHamburgerMenu } from "react-icons/gi";

export const Layout: CompT = observer((props) => {
  const { children } = props;
  const [openUserMenu, setOpenUserMenu] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  return (
    <Container>
      <AppBarContainer>
        <button className="mobile-hamb" onClick={() => setIsMobileMenuOpen(true)}><GiHamburgerMenu size={30} /></button>
        <MobileMenu open={isMobileMenuOpen} onRequestToClose={() => setIsMobileMenuOpen(false)}>
          <ul>
            <li>
              <Link to={"/"}>HOME</Link>
            </li>
            <li className="semi-private">
              <Link to={"/looking"}>LOOKING</Link>
            </li>
            <li>
              <Link to={"/professions"}>PROFESSIONS</Link>
            </li>
            <li>
              <Link to={"/support"}>SUPPORT</Link>
            </li>
            {UserStore.data ? (
              <>
                <li className="private">
                  <Link to={"/invitations"}>INVITATIONS</Link>
                </li>
                <li className="private">
                  <Link to={"/contracts"}>CONTRACTS</Link>
                </li>
              </>
            ) : null}
          </ul>
        </MobileMenu>
        <ul className="desktop-nav">
          <Link to={"/"}>
            <li className="title">
              <div
                className="icon"
                style={{ backgroundImage: `url(${Icon})` }}
              ></div>
              TLCenter.INFO
            </li>
          </Link>
          <li>
            <Link to={"/"}>HOME</Link>
          </li>
          <li className="semi-private">
            <Link to={"/looking"}>LOOKING</Link>
          </li>
          <li>
            <Link to={"/professions"}>PROFESSIONS</Link>
          </li>
          <li>
            <Link to={"/support"}>SUPPORT</Link>
          </li>
          {UserStore.data ? (
            <>
              <li className="private">
                <Link to={"/invitations"}>INVITATIONS</Link>
              </li>
              <li className="private">
                <Link to={"/contracts"}>CONTRACTS</Link>
              </li>
            </>
          ) : null}
        </ul>
        <ul>
          {!UserStore.data ? (
            <>
              <li>
                <Link to={"/auth/login"}>LOGIN</Link>
              </li>
              <li>
                <Link to={"/auth/register"}>REGISTER</Link>
              </li>
            </>
          ) : (
            <li onClick={() => setOpenUserMenu(!openUserMenu)} className="user">
              {UserStore.data.username}
              {openUserMenu ? <FaChevronCircleUp /> : <FaChevronCircleDown />}
              <ul className={`${openUserMenu ? "open" : "closed"}`}>
                <li>
                  <Link to="/user/profile-settings">Profile</Link>
                </li>
                <li onClick={() => logout()}>Sign Out</li>
              </ul>
            </li>
          )}
        </ul>
      </AppBarContainer>
      {children}
    </Container>
  );
});
