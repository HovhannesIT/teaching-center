import { Layout } from "../../components";
import dollarPNG from "../../images/dollar.png";

import { Container } from "./style";

export const Donation = () => {
  return (
    <Layout>
      <Container>
        <div className="block">
          <img src={dollarPNG} alt="" />
          <div className="support">
            <h3>DONATION</h3>
            <p></p>
            <p>If you want help to bring up this startup,</p>
            <p>startup(founder) needs financial support</p>
            <p>in the project he will definitely not forget</p>
            <p>the names of his assistants thanks</p>
            <p></p>
            <ul>
              <li>
                <span>INTERMEDIARY BANK</span> CITIBANK NA, NEW YORK
              </li>
              <li>
                <span>INTERMEDIARY SWIFT</span> CITIUS33XXX
              </li>
              <li>
                <span>BENEFICIARY BANK</span> Ameriabank CJSC
              </li>
              <li>
                <span>BENEFICIARY SWIFT</span> ARMIAM22
              </li>
              <li>
                <span>BENEFICIARY ACCOUNT</span> 1570099209330201
              </li>
              <li>
                <span>BENEFICIARY NAME</span> HOVHANNES AMIRJANYAN
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </Layout>
  );
};
