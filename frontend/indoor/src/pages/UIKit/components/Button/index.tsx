import { Container } from "./styles";
import { CompT } from "./types";
import { AiOutlineLoading } from "react-icons/ai";

export const Button: CompT = (props) => {
  const { type = "primary", loading = false, children, ...rest } = props;

  return (
    <Container theme={type} {...rest}>
      {children}
      {loading ? <AiOutlineLoading className="loading" /> : <></>}
    </Container>
  );
};
