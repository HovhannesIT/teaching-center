import { CompT } from "./types";
import { Container } from "./styles";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";

export const Accordion: CompT = (props) => {
  const { header, children, action = "header", collapse, collapseDefaultState = false } = props;

  const [collapseState, setCollapseState] = useState<boolean>(collapseDefaultState);

  const handleCollapseButton = () => setCollapseState(!collapseState);

  return (
    <Container>
      <div
        onClick={action === "header" ? handleCollapseButton : () => {}}
        className="header"
      >
        <div className="content">{header}</div>
        {action === "header" ? (
          <div className="action">
            {collapseState ? <FaChevronUp /> : <FaChevronDown />}
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="body">
        <div className="content">{children}</div>
        {action === "body" ? (
          <div className="action-container" onClick={handleCollapseButton}>
            <div className="action">
              {collapseState ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </div>
        ) : (
          <></>
        )}
        {collapseState ? <div className="collapse">{collapse}</div> : <></>}
      </div>
    </Container>
  );
};
