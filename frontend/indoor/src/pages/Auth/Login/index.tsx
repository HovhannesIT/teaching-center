import { Layout } from "../../../components";
import { Button, Cart, Input } from "../../UIKit/components";
import { Container } from "./styles";

export const Login = () => {
  return (
    <Layout>
      <Container>
        <h3>LOGIN</h3>
        <form>
          <Cart>
            <div className="cart">
              <label>LOGIN</label>
              <Input />
            </div>
            <div className="cart">
              <label>PASSWORD</label>
              <Input type="password" />
            </div>
            <div className="action">
              <Button>Login</Button>
            </div>
          </Cart>
        </form>
      </Container>
    </Layout>
  );
};
