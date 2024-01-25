import { createPortal } from "react-dom";
import { CompT } from "./types";
import { Container } from "./style";
import { Button } from "../../pages/UIKit/components";

export const PopUp: CompT = (props) => {
  const { visible, type, onAction, children } = props;

  return createPortal(
    <Container visible={visible}>
      <div className="blur">
        <div className="confirmation">
          <div className="content">{children}</div>
          <div className="actions">
            {type === "alert" ? (
              <Button onClick={() => onAction("ok")}>Ok</Button>
            ) : (
              <>
                <Button onClick={() => onAction("cancel")}>Cancel</Button>
                <Button onClick={() => onAction("ok")}>Ok</Button>
              </>
            )}
          </div>
        </div>
      </div>
    </Container>,
    document.getElementById("root") as HTMLElement
  );
};
