import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Container } from "./style";
import { SeekingLookingOpenI } from "../../../types/seeking-looking-open-i";
import { Button, Cart, Input } from "../../UIKit/components";
import { useEffect, useState } from "react";
import { communcationTypesList, professionsList } from "../../../rest-api";
import { Layout } from "../../../components";
import { seekingLookingOpen } from "../../../rest-api/private";

export const LookingForm = () => {
  const { register, handleSubmit } = useForm<SeekingLookingOpenI>();
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  const [communicationTypes, setCommunicationTypes] = useState<
    { id: number; name: string }[]
  >([]);
  const [professions, setProfessions] = useState<
    { id: number; name: string; description: string }[]
  >([]);

  useEffect(() => {
    professionsList().then((data) => setProfessions(data));
    communcationTypesList().then((data) => setCommunicationTypes(data));
  }, []);

  const formSubmit = async (data: SeekingLookingOpenI) => {
    seekingLookingOpen(data)
      .then(() => navigate("/looking/open"))
      .catch((err) => {
        const errors = err.response.data.message;
        setErrors(errors);
      });
  };

  return (
    <Layout>
      <Container>
        <Cart>
          <h3>Looking for?</h3>
          <form onSubmit={handleSubmit(formSubmit)}>
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
              <label>Name</label>
              <Input {...register("name")} />
            </div>
            <div className="cart">
              <label>Description</label>
              <textarea {...register("description")} />
            </div>

            <div className="cart">
              <label>COMMUNICATION TYPE *</label>
              <select {...register("communicationType")}>
                <option value="">Select Communication Type</option>
                {communicationTypes.map((com) => (
                  <option value={com.name} key={com.id + com.name}>
                    {com.name}
                  </option>
                ))}
              </select>
            </div>

            <Button>Find</Button>
          </form>
          {errors.length ? (
            <div className="errors">
              {errors.map((e) => (
                <div key={e}>- {e}</div>
              ))}
            </div>
          ) : null}
        </Cart>
      </Container>
    </Layout>
  );
};
