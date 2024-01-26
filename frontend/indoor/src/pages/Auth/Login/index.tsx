import { useForm } from "react-hook-form";
import { Layout } from "../../../components";
import { Button, Cart, Input } from "../../UIKit/components";
import { Container } from "./styles";
import { UserStore } from "../../../store/user";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

interface LoginFormInterface {
  email: string;
  password: string;
}

export const Login = observer(() => {
  const { register, handleSubmit } = useForm<LoginFormInterface>();
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const onLogin = (body: LoginFormInterface) => {
    setErrors([]);
    UserStore.signIn(body)
      .then((data) => {
        localStorage.setItem("token", data.accessToken);
        navigate("/");
      })
      .catch((err) => {
        const errors = err.response.data.message;
        setErrors(errors);
      });


  };

  return (
    <Layout>
      <Container>
        <h3>LOGIN</h3>
        <form onSubmit={handleSubmit(onLogin)}>
          <Cart>
            <div className="cart">
              <label>EMAIL</label>
              <Input {...register("email")} />
            </div>
            <div className="cart">
              <label>PASSWORD</label>
              <Input type="password" {...register("password")} />
            </div>
            <div className="action">
              <Button>Login</Button>
            </div>
          </Cart>
        </form>

        {errors.length ? (
          <div className="errors">
            {errors.map((e) => (
              <div key={e}>- {e}</div>
            ))}
          </div>
        ) : null}
      </Container>
    </Layout>
  );
});
