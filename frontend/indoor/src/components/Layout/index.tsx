import { CompT } from "./types";
import { Container, AppBarContainer } from './styles';
// import { TiThMenu } from "react-icons/ti";
import Icon from './Icon.png';

export const Layout: CompT = (props) => {
  const { children } = props;
  return (
    <Container>
      <AppBarContainer>
        <ul>
          {/* <li><TiThMenu /></li> */}
          <li className="title"><div className="icon" style={{backgroundImage: `url(${Icon})`}}></div>TLCenter.INFO</li>
          <li>HOME</li>
          <li>LOOKING</li>
          <li>PROFESSIONS</li>
          <li>SUPPORT</li>
        </ul>
        <ul>
          <li>LOGIN</li>
        </ul>
      </AppBarContainer>
      {children}
    </Container>
  );
}