import { Layout, PopUp } from "../../components";
import { Input } from "../UIKit/components";

import helpUSPNG from "../../images/help-us.png";
import suggestUSPNG from "../../images/suggest-us.png";

import { Container, PopUpContainer } from "./style";
import { useState } from "react";
import { suggestImprovement, suggestProfession } from "../../rest-api/public";

export const Support = () => {
  const [showPopUp, setShowPopUp] = useState<boolean>(false);

  const [profession, setProfession] = useState("");
  const [improvement, setImprovement] = useState("");

  const sendImprovement = async () => {
    suggestImprovement(improvement);
    setShowPopUp(true);
  };

  const sendProfession = async () => {
    suggestProfession(profession);

    setShowPopUp(true);
  };

  return (
    <Layout>
      <PopUp
        visible={showPopUp}
        type="alert"
        onAction={() => setShowPopUp(false)}
      >
        <PopUpContainer>
          <p>Thank You</p>
        </PopUpContainer>
      </PopUp>
      <Container>
        <div
          className="help-image"
          style={{ backgroundImage: `url(${helpUSPNG})` }}
        ></div>
        <div
          className="suggest-image"
          style={{ backgroundImage: `url(${suggestUSPNG})` }}
        ></div>
        <div style={{ height: "250px" }}>
          <section>
            <div>
              <p className="title">
                Suggest us feature or improvements which you prefer
              </p>
              <form onSubmit={(e) => e.preventDefault()}>
                <textarea
                  value={profession}
                  onChange={({ target: { value } }) => setProfession(value)}
                ></textarea>
                <div className="reversed">
                  <button onClick={() => sendImprovement()} type="submit">
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
        <div>
          <section>
            <p className="title">
              Send Professions which you are not able to see in platform
            </p>
            <div>
              <form onSubmit={(e) => e.preventDefault()}>
                <Input
                  value={improvement}
                  onChange={({ target: { value } }) => setImprovement(value)}
                />
                <div>
                  <button onClick={() => sendProfession()} type="submit">
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </Container>
      <Container className="sec">
        <div className="block">
          {/* <img src={dollarPNG} alt="" /> */}
          {/* <div className="support">
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
          </div> */}
        </div>
      </Container>
    </Layout>
  );
};
