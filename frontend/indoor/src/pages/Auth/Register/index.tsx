import { Layout } from "../../../components";
import { Button, Cart, DatePicker, Input } from "../../UIKit/components";
import { Container } from "./styles";

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

export const Register = () => {
  return (
    <Layout>
      <Container>
        <h3>REGISTER</h3>
        <form>
          <Cart>
            <div className="cart">
              <label>FIRST NAME *</label>
              <Input />
            </div>
            <div className="cart">
              <label>LAST NAME</label>
              <Input />
            </div>
            <div className="cart">
              <label>USERNAME *</label>
              <Input />
            </div>
            <div className="cart">
              <label>PASSWORD *</label>
              <Input type="password" />
            </div>
            <div className="cart">
              <label>BIRTH DATE *</label>
              <DatePicker value="1997-06-06" onChange={() => {}} />
            </div>
            <div className="cart">
              <label>TYPE *</label>
              <ul className="type">
                <li className="active">STUDENT</li>
                <li>TEACHER</li>
                <li>ENTHUSIAST</li>
                <li>COACH</li>
              </ul>
            </div>
            <div className="cart">
              <label>PROFESSION *</label>
              <select>
                <option>One</option>
              </select>
            </div>
            <div className="cart">
              <label>PHONE NUMBER *</label>
              <Input />
            </div>
            <div className="cart">
              <label>COMMUNICATION TYPE *</label>
              <select>
                <option>One</option>
              </select>
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
