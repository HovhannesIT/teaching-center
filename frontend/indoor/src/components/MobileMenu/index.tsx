import { createPortal } from "react-dom";
import { Container } from "./styled";
import { CompT } from "./types";
import { Button } from "../../pages/UIKit/components";

export const MobileMenu: CompT = (props) => {
  const { open, children, onRequestToClose } = props;

  return createPortal(
    <Container open={open}>
      <div className="content">
        {children}
      </div>
      <div className="actions">
        <Button onClick={() => onRequestToClose()}>Close</Button>
      </div>
    </Container>,
    document.getElementById("root") as HTMLElement
  );
};
