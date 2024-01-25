import { useState } from "react";
import { Layout } from "../../../components";
import { Button, Cart, DatePicker, Input } from "../../UIKit/components";
import { Container } from "./styles";

import { useForm, SubmitHandler } from "react-hook-form";
import moment from "moment";

/*

{
    "firstName": "Hovhannes",
    "lastName": "Amirjanyan",
    "username": "hovhannesIT",
    "email": "hovhannes.software.engineer@gmail.com",
    "password": "1234567891112",
    "type": "both",
    "professionId": 1,
    "phoneNumber": "123456789",
    "primaryCommunicationType": "skype",
    "birthDate": "1997-06-06",
    "avatar": null
}

*/

interface formInterface {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  professionId: string;
  phoneNumber: string;
  primaryCommunicationType: string;
}

export const Register = () => {
  const [onLoad, setOnLoad] = useState<boolean>(false);
  const [birthDate ,setBirthDate] = useState(moment().format('YYYY-MM-DD'));
  const [type, setType] = useState("student");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<formInterface>();

  const onRegister = (data: formInterface) => {};

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
              <Button>REGISTER</Button>
            </div>
          </Cart>
          <Cart>
            <div className="cart">
              <label>BIRTH DATE *</label>
              <DatePicker value={birthDate} onChange={(birthDate) => setBirthDate(birthDate)} />
            </div>
            <div className="cart">
              <label>TYPE *</label>
              <ul className="type">
                <li onClick={() => setType('student')} className={type === 'student' ? 'active' : ''}>STUDENT</li>
                <li onClick={() => setType('teacher')} className={type === 'teacher' ? 'active' : ''}>TEACHER</li>
                <li onClick={() => setType('enthusiast')} className={type === 'enthusiast' ? 'active' : ''}>ENTHUSIAST</li>
                <li onClick={() => setType('coach')} className={type === 'coach' ? 'active' : ''}>COACH</li>
              </ul>
            </div>
            <div className="cart">
              <label>PROFESSION *</label>
              <select {...register("professionId")}>
                <option>One</option>
              </select>
            </div>
            <div className="cart">
              <label>PHONE NUMBER *</label>
              <Input {...register("phoneNumber")} />
            </div>
            <div className="cart">
              <label>COMMUNICATION TYPE *</label>
              <select {...register("primaryCommunicationType")}>
                <option>One</option>
              </select>
            </div>
          </Cart>
        </form>
      </Container>
    </Layout>
  );
};
