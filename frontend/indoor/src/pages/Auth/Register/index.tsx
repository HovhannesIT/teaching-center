import { useEffect, useState } from "react";
import { Layout } from "../../../components";
import { Button, Cart, DatePicker, Input } from "../../UIKit/components";
import { Container } from "./styles";

import { useForm } from "react-hook-form";
import moment from "moment";
import { professionsList, signUp } from "../../../rest-api/public";
import { communcationTypesList } from "../../../rest-api/public";
import { useNavigate } from "react-router-dom";
import { SignUpFormI } from "../../../types/sign-up.i";

export const Register = () => {
  const [onLoad, setOnLoad] = useState<boolean>(false);
  const [professions, setProfessions] = useState<
    { id: number; name: string; description: string }[]
  >([]);

  const navigate = useNavigate();
  const [communicationTypes, setCommunicationTypes] = useState<
    { id: number; name: string }[]
  >([]);
  const [errorList, setErrorList] = useState<string[]>([]);

  const [birthDate, setBirthDate] = useState(moment().format("YYYY-MM-DD"));
  const [type, setType] = useState("student");

  const { register, handleSubmit } = useForm<SignUpFormI>();

  useEffect(() => {
    professionsList().then((data) => setProfessions(data));
    communcationTypesList().then((data) => setCommunicationTypes(data));
  }, []);

  const onRegister = (formData: SignUpFormI) => {
    setOnLoad(true);
    signUp({
      ...formData,
      birthDate,
      type,
      professionId: Number(formData.professionId || 1),
      primaryCommunicationType: String(formData.primaryCommunicationType || 1),
    })
      .then(() => {
        setErrorList([]);
        setOnLoad(false);
        navigate("/auth/login");
      })
      .catch(
        ({
          response: {
            data: { message },
          },
        }) => {
          setErrorList(message);
          setOnLoad(false);
          window.scrollTo(0, document.body.scrollHeight);
        }
      );
  };

  return (
    <Layout>
      <Container>
        <h3>REGISTER</h3>
        <form onSubmit={handleSubmit(onRegister)}>
          <Cart>
            <div className="cart">
              <label>FIRST NAME *</label>
              <Input {...register("firstName")} />
            </div>
            <div className="cart">
              <label>LAST NAME</label>
              <Input {...register("lastName")} />
            </div>
            <div className="cart">
              <label>USERNAME *</label>
              <Input {...register("username")} />
            </div>
            <div className="cart">
              <label>EMAIL *</label>
              <Input type="email" {...register("email")} />
            </div>
            <div className="cart">
              <label>PASSWORD *</label>
              <Input type="password" {...register("password")} />
            </div>
            <div className="cart">
              <Button loading={onLoad}>REGISTER</Button>
            </div>
          </Cart>
          <Cart>
            <div className="cart">
              <label>BIRTH DATE *</label>
              <DatePicker
                value={birthDate}
                onChange={(birthDate) => setBirthDate(birthDate)}
              />
            </div>
            <div className="cart">
              <label>TYPE *</label>
              <ul className="type">
                <li
                  onClick={() => setType("student")}
                  className={type === "student" ? "active" : ""}
                >
                  STUDENT
                </li>
                <li
                  onClick={() => setType("teacher")}
                  className={type === "teacher" ? "active" : ""}
                >
                  TEACHER
                </li>
                <li
                  onClick={() => setType("enthusiast")}
                  className={type === "enthusiast" ? "active" : ""}
                >
                  ENTHUSIAST
                </li>
                <li
                  onClick={() => setType("coach")}
                  className={type === "coach" ? "active" : ""}
                >
                  COACH
                </li>
              </ul>
            </div>
            <div className="cart">
              <label>PROFESSION *</label>
              <select {...register("professionId")}>
                {professions.map((prof) => (
                  <option value={prof.name} key={prof.id + prof.name}>
                    {prof.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="cart">
              <label>PHONE NUMBER *</label>
              <Input {...register("phoneNumber")} />
            </div>
            <div className="cart">
              <label>COMMUNICATION TYPE *</label>
              <select {...register("primaryCommunicationType")}>
                {communicationTypes.map((com) => (
                  <option value={com.name} key={com.id + com.name}>
                    {com.name}
                  </option>
                ))}
              </select>
            </div>
          </Cart>
        </form>
        {errorList.length ? (
          <div className="errors">
            {errorList.map((e) => (
              <div key={e}>- {e}</div>
            ))}
          </div>
        ) : null}
      </Container>
    </Layout>
  );
};
