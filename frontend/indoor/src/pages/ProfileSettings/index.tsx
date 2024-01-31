import { useEffect, useState } from "react";
import { Layout } from "../../components";
import { Button, Cart, DatePicker, Input } from "../UIKit/components";
import { Container } from "./styled";

import { useForm } from "react-hook-form";
import moment from "moment";
import { professionsList } from "../../rest-api/public";
import { communcationTypesList } from "../../rest-api/public";
import { observer } from "mobx-react-lite";
import { UserStore } from "../../store/user";
import { updateUserInfo } from "../../rest-api/private";
import { useNavigate } from "react-router-dom";
import { UpdateUserI } from "../../types/update-user-i";

export const ProfileSettings = observer(() => {
  const [onLoad, setOnLoad] = useState<boolean>(false);
  const [professions, setProfessions] = useState<
    { id: number; name: string; description: string }[]
  >([]);
  const [communicationTypes, setCommunicationTypes] = useState<
    { id: number; name: string }[]
  >([]);
  const [errorList, setErrorList] = useState<string[]>([]);
  const navigate = useNavigate();
  const [birthDate, setBirthDate] = useState(moment().format("YYYY-MM-DD"));
  const [type, setType] = useState("");

  const { register, handleSubmit, setValue } = useForm<UpdateUserI>();

  const syncData = () => {
    if(UserStore.data) {
      setBirthDate(UserStore.data.birthDate);
      setType(UserStore.data.type);
    }
    professionsList().then((data) => {
      setProfessions(data);
      communcationTypesList().then((data) => {
        setCommunicationTypes(data);
        for (const key in UserStore.data) {
          const value = UserStore.data[key];
          setValue(
            key as
              | "firstName"
              | "lastName"
              | "professionId"
              | "phoneNumber"
              | "primaryCommunicationType",
            value
          );
        }
      });
    });
  };

  useEffect(() => {
    syncData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onUpdate = (formData: UpdateUserI) => {
    setOnLoad(true);
    updateUserInfo({
      ...formData,
      type,
      birthDate,
      professionId: Number(formData.professionId),
      primaryCommunicationType: String(formData.primaryCommunicationType),
    }).then((data) => {
      setOnLoad(false);
      if(!Array.isArray(data)) {
        navigate('/');
      } else {
        setErrorList(data);
      }
    });
  };

  return (
    <Layout>
      <Container>
        <h3>PROFILE SETTINGS</h3>
        <form onSubmit={handleSubmit(onUpdate)}>
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
                  <option value={prof.id} key={prof.id + prof.name}>
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
            <div className="cart">
              <Button loading={onLoad}>UPDATE USER INFO</Button>
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
});
