import { Container } from "./styles";
import { CompT } from "./types";
import { AiOutlineLoading } from "react-icons/ai";

export const Button: CompT = (props) => {
  const { type = "primary", loading = false, children } = props;

  return (
    <Container type={type}>
      {children}
      {loading ? <AiOutlineLoading className="loading" /> : <></>}
    </Container>
  );
};
