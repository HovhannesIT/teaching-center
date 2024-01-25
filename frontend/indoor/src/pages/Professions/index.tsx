import { useEffect, useState } from "react";
import { Layout } from "../../components";
import { Cart } from "../UIKit/components";
import { CartContent, Container } from "./styled";
import { professionsList } from "../../rest-api/public";

export const Professions = () => {
  const [professions, setProfessions] = useState<
    { id: number; name: string; description: string }[]
  >([]);

  useEffect(() => {
    professionsList().then((data) => {
      setProfessions(data);
    });
  }, []);

  return (
    <Layout>
      <Container>
        {professions.map((p) => (
          <Cart key={p.id + p.name}>
            <CartContent>
              <div className="title">{p.name}</div>
              <div className="description">{p.description}</div>
            </CartContent>
          </Cart>
        ))}
      </Container>
    </Layout>
  );
};
