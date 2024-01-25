import { CompT } from "./types";
import { Container, AppBarContainer } from "./styles";
// import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";
import Icon from "./Icon.png";

export const Layout: CompT = (props) => {
  const { children } = props;
  return (
    <Container>
      <AppBarContainer>
        <ul>
          {/* <li><TiThMenu /></li> */}
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
          <li>
            <Link to={"/looking"}>LOOKING</Link>
          </li>
          <li>
            <Link to={"/professions"}>PROFESSIONS</Link>
          </li>
          <li>
            <Link to={"/support"}>SUPPORT</Link>
          </li>
        </ul>
        <ul>
          <li>LOGIN</li>
        </ul>
      </AppBarContainer>
      {children}
    </Container>
  );
};
